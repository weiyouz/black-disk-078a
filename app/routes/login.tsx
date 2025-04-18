import { useState } from 'react';
import { Form, useActionData, redirect } from '@remix-run/react';
import { json } from '@remix-run/node';
import type { ActionFunctionArgs } from '@remix-run/node';

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  if (username === 'admin' && password === 'admin888') {
    return redirect('/courses');
  }

  return json({ error: '用户名或密码不正确' });
};

export default function Login() {
  const actionData = useActionData<typeof action>();
  const [remember, setRemember] = useState(false);

  return (
    <div className="flex w-full h-screen">
      {/* 左侧背景图 */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 bg-opacity-70 flex items-center justify-center">
          <div className="text-white text-center p-8">
            <h1 className="text-4xl font-bold mb-4">成人继续教育学习系统</h1>
            <p className="text-xl">提升自我，成就未来</p>
          </div>
        </div>
      </div>
      
      {/* 右侧登录表单 */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-4/5 max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">欢迎登录</h2>
          
          <Form method="post" className="space-y-6">
            {actionData?.error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {actionData.error}
              </div>
            )}
            
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">用户名</label>
              <input 
                id="username"
                type="text" 
                name="username"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" 
                placeholder="请输入用户名"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">密码</label>
              <input 
                id="password"
                type="password"
                name="password" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" 
                placeholder="请输入密码"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember-me" 
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">记住我</label>
              </div>
              <a href="/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">忘记密码?</a>
            </div>
            
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
              >
                登录
              </button>
            </div>
          </Form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              还没有账号? <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">立即注册</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 