import * as React from 'react';

interface ICommentHeaderProps {
  name?: string;
  context?: string;
  timestamp?: string;
  photo?: string;
  tag?: string;
  expanded?: boolean;
  expandFunc?: VoidFunction;
}

export class CommentHeader extends React.Component<ICommentHeaderProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div style={this.styles.cardHeader}>
        <div style={this.styles.upperHeader} className={this.bsc.upperHeader}>
          <div>
            <img style={this.styles.photo} src={this.props.photo} />
          </div>
          <div style={this.styles.nameArea} className={this.bsc.nameArea}>
            <h1 style={this.styles.name} className={this.bsc.name}>
              {this.props.name}
            </h1>
            <p style={this.styles.timestamp} className={this.bsc.timestamp}>
              {this.props.timestamp}
            </p>
            <div style={this.styles.tagArea}>
              <h6 style={this.styles.tag} className={this.bsc.tag}>
                {this.props.tag}
              </h6>
            </div>
          </div>
          <div>
            <input
              type="image"
              style={this.styles.cornerButton}
              src={
                this.props.expanded
                  ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Resize_small_font_awesome.svg/1024px-Resize_small_font_awesome.svg.png'
                  : 'http://cdn.onlinewebfonts.com/svg/img_72157.png'
              }
              alt="Expand"
              onClick={this.props.expandFunc}
            />
          </div>
        </div>
        <div
          style={
            this.props.expanded
              ? this.styles.contextExpanded
              : this.styles.contextNotExpanded
          }
        >
          <p>{this.props.context}</p>
        </div>
      </div>
    );
  }

  bsc = {
    upperHeader: 'row',
    nameArea: 'col',
    tag: 'badge badge-secondary row-offset-1',
    name: 'row-offset-1',
    timestamp: 'row-offset-1'
  };

  styles = {
    upperHeader: {},
    cardHeader: {
      marginBottom: '10px'
    },
    nameArea: {
      paddingLeft: '5px'
    },
    photo: {
      height: '2.7em',
      width: '2.7em',
      marginTop: '5px',
      marginLeft: '20px'
    },
    name: {
      fontSize: '12px',
      fontWeight: 'bold' as 'bold',
      marginTop: '3px',
      marginBottom: '1px'
    },
    timestamp: {
      fontSize: '.7em',
      marginBottom: '0px',
      marginTop: '-5px'
    },
    contextNotExpanded: {
      height: '30px',
      maxWidth: '350px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '.8em',
      paddingLeft: '5px',
      paddingRight: '10px',
      lineHeight: 'normal'
    },
    contextExpanded: {
      height: '100%',
      maxWidth: '350px',
      overflow: '',
      textOverflow: 'ellipsis',
      fontSize: '.8em',
      lineHeight: 'normal',
      paddingLeft: '5px',
      paddingRight: '10px'
    },
    cornerButton: {
      marginTop: '5px',
      marginRight: '25px',
      width: '1.3em',
      height: '1.3em'
    },
    tag: {
      background: '#E0E0E0',
      fontSize: '.7em',
      fontWeight: 'normal' as 'normal',
      color: 'black',
      borderRadius: '2px',
      marginBottom: '0px',
      marginTop: '-4px'
    },
    tagArea: {
      marginTop: '-5px'
    }
  };
}
