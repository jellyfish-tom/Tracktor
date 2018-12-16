import * as React from "react";
import { inject, observer } from "mobx-react";
import * as styles from "./AddSugar.styles";
import AddSugarStore from "./AddSugarStore";

import { Form, Button, Row, DatePicker, Col, InputNumber } from "antd";

interface AddSugarProps {
  onChange: (value: any, field: any) => void;
}

export const injectProps: (injected: any) => AddSugarProps = injected => {
  console.log("injected");
  console.log(injected);
  return {
    onChange: injected.appStore.addSugarStore.onChange
  };
};

const FormItem = Form.Item;

@inject(injectProps)
@observer
export default class AddSugar extends React.PureComponent<{}, {}> {
  get injected() {
    console.log("this.props");
    console.log(this.props);
    return this.props as AddSugarProps;
  }

  constructor(props: any) {
    super(props);
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    // this.props.form.validateFieldsAndScroll((err: any, values: any) => {
    //   if (!err) {
    //     console.log("Received values of form: ", values);
    //   }
    // });
  };

  // - timestamp
  // 	- place (geo)
  // 	- value
  // 	- carbohydrates
  // 	- foodInsulin
  // 	- correctionInsulin
  // 	- baseInsulin
  // 	- [[MEAL]]
  // 	- [[ACTIVITY]]
  // 	- [[BLOOD_PRESSURE]]
  render() {
    const { onChange } = this.injected;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <div>
        <Row gutter={16}>
          <Col span={6} />
          <Col span={12}>
            <FormItem {...formItemLayout} label="DatePicker[showTime]">
              <DatePicker showTime format="DD-MM-YYYY HH:mm:ss" />
            </FormItem>
            <Form onSubmit={this.handleSubmit}>
              <FormItem {...formItemLayout} label="Sugar level">
                <InputNumber
                  min={1}
                  max={1000}
                  defaultValue={120}
                  onChange={val => {
                    onChange(val, "value");
                  }}
                />
              </FormItem>
              <FormItem {...formItemLayout} label="Carbohydrates">
                <InputNumber
                  min={1}
                  max={1000}
                  defaultValue={0}
                  onChange={val => {
                    onChange(val, "carbohydrates");
                  }}
                />
              </FormItem>
              <FormItem {...formItemLayout} label="Food insulin">
                <InputNumber
                  min={1}
                  max={100}
                  defaultValue={0}
                  onChange={val => {
                    onChange(val, "foodInsulin");
                  }}
                />
              </FormItem>
              <FormItem {...formItemLayout} label="Correction insulin">
                <InputNumber
                  min={1}
                  max={100}
                  defaultValue={0}
                  onChange={val => {
                    onChange(val, "correctionInsulin");
                  }}
                />
              </FormItem>
              <FormItem {...formItemLayout} label="Base insulin">
                <InputNumber
                  min={1}
                  max={100}
                  defaultValue={0}
                  onChange={val => {
                    onChange(val, "baseInsulin");
                  }}
                />
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </FormItem>
            </Form>
          </Col>
          <Col span={6} />
        </Row>
      </div>
    );
  }
}
