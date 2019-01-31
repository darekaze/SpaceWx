const subDirName = 'r2dev/vueswx';

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? `/${subDirName}/`
    : '/',
  outputDir: `dist/${subDirName}`,
};
