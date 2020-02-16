const formatRows = data => {
  let rows = data.split("\r\n");
  let headings = rows.shift().split(",");
  let commaSeparatedRows = rows.map(row =>
    row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
  );

  return commaSeparatedRows.map(row => {
    let obj = {};
    for (i = 0; i < row.length; i++) {
      obj[headings[i]] = row[i];
    }
    return obj;
  });
};

module.exports = formatRows;
