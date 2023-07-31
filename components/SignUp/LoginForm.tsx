import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterFill, RiGithubFill } from "react-icons/ri";
import { Button, Checkbox, Form, Input, Typography } from "antd";
const { Text, Title } = Typography;

const LoginForm = () => {
  const handleLogin = (values: {}) => {
    console.log(values);
  };

  return (
    <div className="w-[33%] px-12 py-2 rounded-2xl">
      <Title level={3} className="">
        Welcome Back
      </Title>
      <Text className="mb-4">
        Enter the information you entered while registering.
      </Text>
      <div className="mb-6">
        <Text>Sign in with</Text>
        <div className="flex gap-2 mt-3 w-full h-[33px]">
          <button className="border-2 flex justify-center items-center rounded-lg w-full">
            <FcGoogle size={20} />
          </button>
          <button className="border-2 flex justify-center items-center rounded-lg w-full">
            <RiTwitterFill size={20} fill="#1DA1F2" />
          </button>
          <button className="border-2 flex justify-center items-center w-full rounded-lg">
            <RiGithubFill size={20} fill="#171515" />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="border-b-2" />
        <Text className="absolute bottom-[-17px] bg-[#f9f7fb] p-2 ml-[30%]">
          Or continue with
        </Text>
      </div>
      <Form layout="vertical" onFinish={handleLogin} className="mt-8">
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input type="email" placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember Me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            className="active rounded-lg w-full"
            htmlType="submit"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <Button type="text" href="#" className="text-blue-900 w-full">
        Forgot your password?
      </Button>
      <div>
        <Text>Don't have an Account? </Text>
        <Button type="text" href="#" className="text-blue-900">
          Sign-Up here
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
