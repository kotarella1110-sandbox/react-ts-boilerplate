// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
// @ts-ignore
const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.tsx$/);

req.keys().forEach(key => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.tsx/, '$1');
  module.exports[componentName] = req(key).default;
});
