import React, { Component } from "react";
import { connect } from "react-redux";

import Gallery from "react-photo-gallery";
import Measure from "react-measure";

class ImageGallery extends Component {
  constructor() {
    super();
    this.state = { width: -1 };
  }

  buildImageArray(columns) {
    if (this.props.images === null) {
      return [];
    }

    var photos = this.props.images.map((item, i) => {
      return {
        src: item.images.standard_resolution.url,
        srcSet: [
          `${item.images.low_resolution.url} ${
            item.images.low_resolution.width
          }w`,
          `${item.images.thumbnail.url} ${item.images.thumbnail.width}w`
        ],
        width: item.images.standard_resolution.width,
        height: item.images.standard_resolution.height
      };
    });

    return photos.slice(0, columns);
  }

  render() {
    const width = this.state.width;
    return (
      <Measure
        bounds
        onResize={contentRect =>
          this.setState({ width: contentRect.bounds.width })
        }
      >
        {({ measureRef }) => {
          if (width < 1) {
            return <div ref={measureRef} />;
          }
          let columns = 1;
          if (width >= 480) {
            columns = 2;
          }
          if (width >= 1024) {
            columns = 4;
          }
          if (width >= 1824) {
            columns = 6;
          }
          return (
            <div ref={measureRef}>
              <Gallery
                photos={this.buildImageArray(columns)}
                columns={columns}
              />
            </div>
          );
        }}
      </Measure>
    );
  }
}

function mapStateToProps({ images }) {
  return { images: images };
}

export default connect(mapStateToProps)(ImageGallery);
