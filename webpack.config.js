
const path = require('path');

module.exports = {
  entry: './main.js', // فایل ورودی اصلی
  output: {
    filename: 'bundle.js', // فایل خروجی نهایی
    path: path.resolve(__dirname, 'dist'), // مسیر خروجی
  },
  module: {
    rules: [
      {
        test: /\.js$/, // روی همه فایل‌های js
        exclude: /node_modules/, // به جز پوشه node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // تبدیل ES6+
            sourceType: 'unambiguous',
          },
        },
      },
    ],
  },
  mode: 'development', // یا 'production'
};
