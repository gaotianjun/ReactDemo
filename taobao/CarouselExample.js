import { Carousel, WingBlank } from 'antd-mobile';
import React from 'react'

class CarouselExample extends React.Component {
  state = {
    data: ['1', '2', '3', '4'],
    imgHeight: 206,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['//gw.alicdn.com/imgextra/i1/2/O1CN0169xZ5Y1BsxQEkuxfV_!!2-0-lubanu.jpg',
          '//gw.alicdn.com/imgextra/i4/67/O1CN01yPXGic1CMjAP1OVdX_!!67-0-lubanu.jpg',
          '//gw.alicdn.com/imgextra/i2/60/O1CN01zHL8nS1CJWOSJYiLf_!!60-0-lubanu.jpg',
          '//gw.alicdn.com/imgextra/i3/55/O1CN01wuefWN1CHEPlNBpUW_!!55-0-lubanu.jpg'],
      });
    }, 100);
  }
  render() {
    return (
      <div style={{ marginTop: '37px' }}>
        {/*infinite:循环播放*/}
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="  https://main.m.taobao.com/?sprefer=sypc00"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                data-src={`${val}`}
                src={`${val}`}
                alt="首页轮播图"
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default CarouselExample;