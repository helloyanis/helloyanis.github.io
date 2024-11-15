"use client"
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

export default function Navbar() {
  const { t, i18n } = useTranslation("nav");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    }
  }, [i18n.isInitialized]);

  return (
    <nav className="p-4">
      <ul className="flex space-x-4 text-center justify-center">
        <Link href="/" className="nav-link" shallow>
          <li>
            {isReady ? (
              
                <span>{"🏠"}<br/>{t("home")}</span>
              
            ) : (
              <Skeleton width={100} height={24} />
            )}
          </li>
        </Link>
        <Link href="/about" className="nav-link" shallow>
          <li>
            {isReady ? (
              
                <span>{"ℹ️"}<br/>{t("about")}</span>
              
            ) : (
              <Skeleton width={100} height={24} />
            )}
          </li>
        </Link>
        <Link href="/contact" className="nav-link" shallow>
          <li>
            {isReady ? (
              
                <span>{"💬"}<br/>{t("contact")}</span>
              
            ) : (
              <Skeleton width={100} height={24} />
            )}
          </li>
        </Link>
        <Link href="/funzone" className="nav-link" shallow>
          <li>
            {isReady ? (
              
                <span>{"🕹️"}<br/>{t("funzone")}</span>
              
            ) : (
              <Skeleton width={100} height={24} />
            )}
          </li>
        </Link>
      </ul>
    </nav>
  );
}