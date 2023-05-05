import React, { useState } from "react";
import { useMount } from "react-use";
import { object, func } from "prop-types";
import { Button, DatePicker, Form, Input, Select } from "antd";

let batchYears = [];

const latestBatch =
  new Date().getMonth() >= 4
    ? new Date().getFullYear() + 1
    : new Date().getFullYear();

for (let index = latestBatch; index < latestBatch + 3; index++) {
  const tempYear = { value: index, label: index };
  batchYears.push(tempYear);
}

function StudentRegistrationForm(props) {
  const [regForm] = Form.useForm();
  const [disableFields, setDisableFields] = useState(false);

  const handleSubmit = () => {
    props.formSubmitted(true);
  };

  useMount(() => {
    setDisableFields(false);
    props.formSubmitted(false);
    regForm.setFieldsValue({
      name: props.studentFormFields.name,
      email: props.studentFormFields.email,
      dob: props.studentFormFields.dob,
      studentId: props.studentFormFields.studentId,
      batch: props.studentFormFields.batch,
    });
  });

  return (
    <div>
      <Form
        form={regForm}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            disabled={disableFields}
            value={props.studentFormFields.name}
            placeholder="Firstname Lastname"
            onChange={(e) => props.setFormFields("name", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email Address!",
            },
            {
              type: "email",
              message: "Please enter valid email ID",
            },
          ]}
        >
          <Input
            disabled={disableFields}
            placeholder="enter email address"
            onChange={(e) => {
              props.setFormFields("email", e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[
            {
              required: true,
              message: "Please select your birth date",
            },
          ]}
        >
          <DatePicker
            disabled={disableFields}
            onChange={(value) => props.setFormFields("dob", value)}
          />
        </Form.Item>

        <Form.Item
          label="Student ID"
          name="studentId"
          rules={[
            {
              required: true,
              message:
                "Please input your Student ID in the respective organization!",
            },
          ]}
        >
          <Input
            disabled={disableFields}
            placeholder="ie: 00ICXXX000"
            onChange={(e) => props.setFormFields("studentId", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Passing Batch"
          name="batch"
          rules={[{ required: true, message: "Please input your Batch year!" }]}
        >
          <Select
            disabled={disableFields}
            style={{ width: 120 }}
            onChange={(e) => props.setFormFields("batch", e)}
            options={batchYears}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

StudentRegistrationForm.propTypes = {
  studentFormFields: object,
  setFormFields: func,
  formSubmitted: func,
};

export default StudentRegistrationForm;
