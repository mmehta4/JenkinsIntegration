/**
 * @class ExampleComponent
 */

import * as React from 'react';

import styles from './styles.css';
import MyStockChart from './components/StockChart';

export type Props = { text: string };

export default class ExampleComponent extends React.Component<Props> {
  render() {
    return (
      <div className={styles.test}>
        <MyStockChart />
      </div>
    );
  }
}
