import React, { useState, useEffect, useRef } from 'react';
import { Alert, Button, Input, Row, Col, } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const FileSearch = ({ title, onFileSearch }) => {
  const [inputActive, setInputActive] = useState(false);
  const [value, setValue] = useState('')
  let node = useRef(null)

  // 关闭搜索框
  const closeSearch = (e) => {
    e.preventDefault();
    setInputActive(false)
    setValue('')
  }

  // 按钮事件切换
  useEffect(() => {
    const handleInputEvent = (event) => {
      const { keyCode } = event
      if (keyCode == 13 && inputActive) {
        onFileSearch(value)
      } else if (keyCode == 27 && inputActive) {
        closeSearch(event)
      }
    }
    // 添加事件
    document.addEventListener('keyup', handleInputEvent)
    // 删除事件
    return () => {
      document.removeEventListener('keyup', handleInputEvent)
    }
  })

  useEffect(() => {
    if (inputActive) {
      node.current.focus()
    }
  }, [inputActive])

  return (
    <div>
      {!inputActive && <Row>
        <Col span={19}>
          <Alert message={title} type="info" />
        </Col>
        <Col span={5}>
          <SearchOutlined type="primary" onClick={() => {
            setInputActive(true)
          }} />
        </Col>
      </Row>}
      {inputActive && <Row>
        <Col span={19}>
          <Input value={value} ref={node} onChange={e => {
            setValue(e.target.value)
          }} />
        </Col>
        <Col span={5}>
          <CloseOutlined type="primary" onClick={closeSearch} />
        </Col>
      </Row>}
    </div>
  )
}

FileSearch.propTypes = {
  title: PropTypes.string,
  onFileSearch: PropTypes.func
}

export default FileSearch