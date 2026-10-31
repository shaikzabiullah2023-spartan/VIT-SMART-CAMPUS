/**
 * HAND-WRITTEN SYNTAX HIGHLIGHTER & CODE VIEWER (ZERO EXTERNAL LIBRARIES)
 * Formats HTML, CSS, and JavaScript with token colors, line numbers, copy, and download.
 */

window.CodeViewer = (function () {
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function highlightHtml(code) {
    let escaped = escapeHtml(code);

    // Comments: &lt;!-- ... --&gt;
    escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="token-comment">$1</span>');

    // Tags and attributes
    escaped = escaped.replace(/(&lt;\/?)([a-zA-Z0-9\-]+)([\s\S]*?)(&gt;)/g, function (match, p1, p2, p3, p4) {
      let attrs = p3.replace(/([a-zA-Z0-9\-]+)(=)(["'][^"']*["'])/g, function (m, aName, eq, aVal) {
        return `<span class="token-attr-name">${aName}</span>${eq}<span class="token-attr-value">${aVal}</span>`;
      });
      return `${p1}<span class="token-tag">${p2}</span>${attrs}${p4}`;
    });

    return escaped;
  }

  function highlightCss(code) {
    let escaped = escapeHtml(code);

    // CSS Comments
    escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>');

    // Selectors, properties, values
    escaped = escaped.replace(/([^{]+)\{([^}]+)\}/g, function (match, selector, body) {
      let styledBody = body.replace(/([a-zA-Z0-9\-]+)(\s*:)([^;]+)(;)/g, function (m, prop, colon, val, semi) {
        return `<span class="token-property">${prop}</span>${colon}<span class="token-string">${val}</span>${semi}`;
      });
      return `<span class="token-tag">${selector.trim()}</span> {${styledBody}}`;
    });

    return escaped;
  }

  function highlightJs(code) {
    let escaped = escapeHtml(code);

    // Comments
    escaped = escaped.replace(/(\/\/[^\n]*)/g, '<span class="token-comment">$1</span>');
    escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>');

    // Keywords
    const keywords = /\b(const|let|var|function|return|if|else|for|while|switch|case|break|default|new|class|import|export|from|try|catch|finally|async|await|this|true|false|null|undefined)\b/g;
    escaped = escaped.replace(keywords, '<span class="token-keyword">$1</span>');

    // Strings
    escaped = escaped.replace(/(["'`][^"'`\n]*["'`])/g, '<span class="token-string">$1</span>');

    // Numbers
    escaped = escaped.replace(/\b(\d+)\b/g, '<span class="token-number">$1</span>');

    // Function calls
    escaped = escaped.replace(/\b([a-zA-Z0-9_$]+)(?=\()/g, '<span class="token-function">$1</span>');

    return escaped;
  }

  function highlight(code, fileExt) {
    if (!code) return '';
    if (fileExt === 'html' || fileExt === 'htm' || fileExt === 'svg') {
      return highlightHtml(code);
    } else if (fileExt === 'css') {
      return highlightCss(code);
    } else if (fileExt === 'js') {
      return highlightJs(code);
    }
    return escapeHtml(code);
  }

  function render(containerEl, fileList, currentFile, rawContent, onFileChange) {
    const ext = currentFile.split('.').pop().toLowerCase();
    const highlighted = highlight(rawContent, ext);
    const lines = rawContent.split('\n');
    const lineNumbersHtml = lines.map((_, i) => `<div>${i + 1}</div>`).join('');

    const tabsHtml = fileList.map(file => {
      const activeClass = file === currentFile ? 'active' : '';
      return `<button class="code-file-tab ${activeClass}" data-file="${file}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        <span>${file}</span>
      </button>`;
    }).join('');

    containerEl.innerHTML = `
      <div class="code-window">
        <div class="code-header">
          <div class="code-files-tabs">${tabsHtml}</div>
          <div class="code-actions">
            <button class="code-btn" id="btn-copy-code" title="Copy code to clipboard">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copy</span>
            </button>
            <button class="code-btn" id="btn-download-code" title="Download this file">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Download</span>
            </button>
          </div>
        </div>
        <div class="code-body">
          <div class="code-pre">
            <div class="code-line-numbers">${lineNumbersHtml}</div>
            <div class="code-content">${highlighted}</div>
          </div>
        </div>
      </div>
    `;

    // File tab click events
    containerEl.querySelectorAll('.code-file-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const file = tab.getAttribute('data-file');
        if (file && onFileChange) onFileChange(file);
      });
    });

    // Copy action
    const copyBtn = containerEl.querySelector('#btn-copy-code');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(rawContent).then(() => {
          copyBtn.innerHTML = `
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span style="color:#10B981;">Copied!</span>
          `;
          setTimeout(() => {
            copyBtn.innerHTML = `
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copy</span>
            `;
          }, 2000);
        });
      });
    }

    // Download action
    const downloadBtn = containerEl.querySelector('#btn-download-code');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const blob = new Blob([rawContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = currentFile;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }
  }

  return {
    render: render,
    highlight: highlight
  };
})();

