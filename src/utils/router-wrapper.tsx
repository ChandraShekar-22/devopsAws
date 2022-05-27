import { Helmet } from 'react-helmet-async';
import React from 'react';

interface PublicRouteProps {
  title?: string;
  content?: string;
  metaName?: string;
  Component: React.ComponentType;
}

export function PublicRoute({ title = 'GMP web', content = '', metaName = '"GMP web"', Component, ...props }: PublicRouteProps) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name={metaName} content={content}></meta>
      </Helmet>
      <Component />
    </React.Fragment>
  );
}
