import React, { useState } from 'react';
import marked from 'marked';
import './addArticle.css';
import { Input, Row, Col, Select, Button, DatePicker } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

function AddArticle() {
  const [articleId, setArticleId] = useState(0); // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle, setArticleTitle] = useState(''); //文章标题
  const [articleContent, setArticleContent] = useState(''); //markdown的编辑内容
  const [articleHtml, setArticleHtml] = useState(''); //html内容
  const [introducemd, setIntroducemd] = useState(); //简介的markdown内容
  const [introduceHtml, setIntroduceHtml] = useState(''); //简介的html内容
  const [showDate, setShowDate] = useState(); //发布日期
  const [updateDate, setUpdateDate] = useState(); //修改日志的日期
  const [typeInfo, setTypeInfo] = useState([]); // 文章类别信息
  const [selectedType, setSelectType] = useState(1); //选择的文章类别

  marked.setOptions({
    renderer: marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false
  });

  const changeContent = (e) => {
    setArticleContent(e.target.value);
    let html = marked(e.target.value);
    setArticleHtml(html);
  };

  const changeIntroduce = (e) => {
    setIntroducemd(e.target.value);
    let html = marked(e.target.value);
    setIntroduceHtml(html);
  };

  return (
    <div>
      <Row gutter={10}>
        <Col span={24}>
          <Row gutter={10}>
            <Col span={11}>
              <Input placeholder="blog title"></Input>
            </Col>
            <Col span={2}>
              <Select defaultValue="article" style={{ width: '100%' }}>
                <Option key="article">article </Option>
                <Option key="video">video </Option>
              </Select>
            </Col>
            <Col span={6}>
              {/* className="date-select" */}
              <DatePicker placeholder="date"></DatePicker>
            </Col>
            <Col span={3}>
              <Button>zancun</Button>
              <Button type="primary" style={{ marginLeft: '20px' }}>
                发布
              </Button>
            </Col>
          </Row>
          <Row gutter={10} className="introduce-row">
            <Col span={11}>
              <TextArea
                rows="2"
                placeholder="jianjie"
                onChange={changeIntroduce}
              ></TextArea>
            </Col>
            <Col span={11}>
              <div
                className="introduce-html"
                dangerouslySetInnerHTML={{ __html: introduceHtml }}
              ></div>
            </Col>
          </Row>
          <Row gutter={10} className="row-content">
            <Col span={11}>
              <TextArea
                className="markdown-content"
                rows={27}
                placeholder="content"
                onChange={changeContent}
              ></TextArea>
            </Col>
            <Col span={11}>
              <div
                className="show-html"
                dangerouslySetInnerHTML={{ __html: articleHtml }}
              ></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AddArticle;
