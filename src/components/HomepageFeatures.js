import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Collapsenav.Net.Tool',
    Image: require('/img/tool.webp').default,
    description: (
      <>
        以扩展方法的形式封装了Collection,string,Stream,Hash等常用操作
        <br></br>
        在 .net6 开发环境下使用 <code>global using Collapsenav.Net.Tool;</code> 即可愉快使用
      </>
    ),
  },
  {
    title: 'Collapsenav.Net.Tool.Excel',
    Image: require('/img/excel.webp').default,
    description: (
      <>
        基于EPPlus，NPOI和MiniExcel提供了导出导出功能
        <br></br>
        使用 <code>CellRead,ExcelRead</code> 提供符合(我)直觉的单元格读取操作
      </>
    ),
  },
];

function Feature ({ Image, title, description }) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <img src={Image} class="mainimg" />
      </div>
      <br></br>
      <div className="text--center padding-horiz--md ">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <br></br>
    </div>
  );
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
