const SUCCESSFULLY_CREATED = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: "",
  serverStatus: 2,
  warningStatus: 0,
};

const SUCCESSFULLY_UPDATED = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: 'Rows matched: 1  Changed: 1  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 1
};

const SUCCESSFULLY_REMOVED = {
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0
}

module.exports = {
  SUCCESSFULLY_CREATED,
  SUCCESSFULLY_UPDATED,
  SUCCESSFULLY_REMOVED,
}
