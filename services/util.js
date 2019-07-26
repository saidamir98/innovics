const types = {
  default: '✌ %o ✌️',
  error: '🔥 %o 🔥',
  ok: '🛡️ %o 🛡️',
  warning: '⚠️ %o ⚠️'
};

module.exports.ReS = function(res, data, code) {
  let sendData = { success: true };

  if (typeof data == 'object') {
    sendData = Object.assign(data, sendData); //merge the objects
  }

  if (typeof code !== 'undefined') res.statusCode = code;

  return res.json(sendData);
};

module.exports.ReE = function(res, err, code) {
  try {
    console.log(err);
    let errors;
    if (typeof err == 'object' && typeof err.message != 'undefined') {
      errors = [{ msg: err.message }];
    } else {
      errors = err;
    }

    if (typeof code !== 'undefined') {
      res.statusCode = code;
    } else {
      res.statusCode = err.status ? err.status : 500;
    }

    return res.json({ success: false, errors: errors });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, errors: [{ msg: e.message }] });
  }
};

module.exports.LOG = LOG = function(message, type) {
  console.log(types[type] ? types[type] : types['default'], message);
};
