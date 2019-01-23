import * as React from 'react';

import { AppHeaderOptions } from './AppHeaderOptions';

interface IAppHeaderProps {
  header?: string;
}

export class AppHeader extends React.Component<IAppHeaderProps> {
  // Checks if the header has been passed abd sets the coresponding styling
  renderAppHeader(): React.ReactNode {
    if (this.props.header === undefined) {
      return (
        <h5
          className="card-header text-center border-0"
          style={this.styles.emptyHeader}
        >
          Select a file to view comments
        </h5>
      );
    }

    return (
      <h3
        className="card-header text-center border-0"
        style={this.styles.header}
      >
        {this.props.header}
      </h3>
    );
  }

  render() {
    return (
      <div className="card border-0 py-1">
        <div>{this.renderAppHeader()}</div>
        <div>
          <AppHeaderOptions />
        </div>
      </div>
    );
  }

  styles = {
    emptyHeader: {
      background: 'white',
      color: '#a3a1a0'
    },
    header: {
      background: 'white',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      fontWeight: 'bold' as 'bold'
    }
  };
}
