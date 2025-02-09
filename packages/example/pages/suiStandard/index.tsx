/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { LogsContainer } from '../../components/LogsContainer';

// injected provider works only if nextjs ssr disabled
const SuiExample = dynamic(() => import('../../components/suiStandard/SuiExample'), { ssr: false });

export default function () {
  // TODO <Layout />
  // TODO eslint fix: deps order, react close tag
  return (
    <div>
      <div className={styles.container}>
        <Link href={'/'}>← Back</Link>
        <h2>Sui Standard Dapp Example</h2>
        <SuiExample />
      </div>
      <LogsContainer />
    </div>
  );
}
