(() => {
  const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const isVisible = (element) => {
    const style = element.getAttribute('style');
    return !style || !style.includes('display: none;');
  };

  const getTextFromVisibleElement = (element) => {
    return element &&
      getComputedStyle(element).getPropertyValue('display') !== 'none'
      ? element.textContent.trim()
      : null;
  };

  const scripts = {
    1: () => {
      const eventRows = [
        ...document.querySelectorAll(
          '#success_event_table .event_row [id^=event_name_]'
        ),
      ];
      return eventRows
        .map(getTextFromVisibleElement)
        .filter((value) => value && !/^Custom\s\d+$/.test(value))
        .join('\n');
    },
    2: () => {
      const eventRows = [
        ...document.querySelectorAll("[id^='event_row_event']"),
      ];
      return eventRows
        .filter(isVisible)
        .map((row) => getTextFromVisibleElement(row.children[0]))
        .filter(Boolean)
        .join('\n');
    },
    3: () => {
      const rows = [...document.querySelectorAll('#success_event_table tr')];
      return rows
        .filter(isVisible)
        .map((row) =>
          getTextFromVisibleElement(
            row.children[2]?.querySelector('div[id$="_text_div_id"]')
          )
        )
        .filter(Boolean)
        .join('\n');
    },
  };

  const choice = prompt('Choose a script to execute (1, 2, or 3):');

  if (scripts[choice]) {
    try {
      const result = scripts[choice]();
      console.log(result);
      copyToClipboard(result);
    } catch (error) {
      console.error('An error occurred while executing the script:', error);
    }
  } else {
    alert('Invalid choice. Please enter 1, 2, or 3.');
  }
})();
