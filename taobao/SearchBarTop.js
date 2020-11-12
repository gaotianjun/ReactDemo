import { Popover, NavBar, Icon } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react'

class SearchBarTop extends React.Component {
  state = {
    value: '宝贝',
  };
  onChange = (value) => {
    this.setState({ value });
  };
  render() {
    return (
      <div>
        <SearchBar
          value={this.state.value}
          placeholder="Search"
          onSubmit={value => console.log(value, 'onSubmit')}
          onClear={() => this.setState({ value: '' })}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          //点击取消按钮触发 回到上一页面
          onCancel={() => this.props.history.push('/')}
          //onCancel={() => this.history.goBack()}
          //是否一直显示取消按钮
          showCancelButton
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default SearchBarTop;