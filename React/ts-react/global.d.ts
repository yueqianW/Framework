// 这边申明了less文件 之后使用import styles from 'xxx.less'就不会有ts报错了
declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}
// 如果使用的第三方库没有ts，可以自己在这边申明
