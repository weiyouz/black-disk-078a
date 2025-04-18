import { Link, useParams } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "课程练习 | 成人教育学习平台" },
    { name: "description", content: "课程练习页面" },
  ];
};

export default function CoursePractice() {
  const { id } = useParams();
  
  return (
    <div className="flex w-full h-screen">
      {/* 左侧导航栏 */}
      <div className="w-[220px] bg-gray-800 text-white">
        <div className="p-6">
          <h2 className="text-xl font-bold">学习系统</h2>
        </div>
        
        <nav className="mt-6">
          <Link to="/courses" className="flex items-center px-6 py-3 bg-gray-700">
            <i className="ri-book-open-line mr-3 text-lg" />
            <span>我的课程</span>
          </Link>
          <Link to="/learning-plan" className="flex items-center px-6 py-3 hover:bg-gray-700 transition">
            <i className="ri-calendar-line mr-3 text-lg" />
            <span>学习计划</span>
          </Link>
          <Link to="/exams" className="flex items-center px-6 py-3 hover:bg-gray-700 transition">
            <i className="ri-file-list-line mr-3 text-lg" />
            <span>考试中心</span>
          </Link>
          <Link to="/certificates" className="flex items-center px-6 py-3 hover:bg-gray-700 transition">
            <i className="ri-medal-line mr-3 text-lg" />
            <span>证书管理</span>
          </Link>
          <Link to="/settings" className="flex items-center px-6 py-3 hover:bg-gray-700 transition">
            <i className="ri-settings-line mr-3 text-lg" />
            <span>个人设置</span>
          </Link>
        </nav>
      </div>
      
      {/* 右侧内容区 */}
      <div className="flex-1 flex flex-col">
        {/* 顶部二级导航 */}
        <header className="h-16 border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center">
            <Link to={`/course/${id}`} className="mr-4 text-gray-500 hover:text-gray-700">
              <i className="ri-arrow-left-line text-xl" />
            </Link>
            <h2 className="text-lg font-medium text-gray-800">项目管理专业课程</h2>
            <div className="ml-8 flex space-x-4">
              <Link to={`/course/${id}`} className="px-3 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100">课程内容</Link>
              <button type="button" className="px-3 py-1 rounded-md bg-indigo-100 text-indigo-700 text-sm font-medium">随堂练习</button>
              <button type="button" className="px-3 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100">讨论区</button>
              <button type="button" className="px-3 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100">课程资料</button>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="text-sm text-gray-600 mr-6">
              <span className="font-medium">剩余时间：</span>
              <span className="text-indigo-600 font-medium">35:45</span>
            </div>
            
            <button type="button" className="relative p-1 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <i className="ri-notification-3-line text-xl" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
            </button>
            
            <div className="ml-4 flex items-center">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="用户头像" className="h-8 w-8 rounded-full" />
              <span className="ml-2 text-sm font-medium text-gray-700">李明</span>
              <i className="ri-arrow-down-s-line ml-1 text-gray-500" />
            </div>
          </div>
        </header>
        
        {/* 练习内容区 */}
        <div className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">第一单元随堂练习</h3>
              <div className="text-sm text-gray-600">
                <span>题目进度：</span>
                <span className="font-medium">3/10</span>
              </div>
            </div>
            
            {/* 题目卡片 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">3</span>
                  <span className="ml-2 text-sm text-gray-600">单选题 (5分)</span>
                </div>
                
                <div className="text-lg font-medium text-gray-800 mb-4">
                  在项目管理中，下列哪项不属于项目管理五大过程组？
                </div>
                
                <form className="space-y-4">
                  <label className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input type="radio" name="question" className="mt-0.5" />
                    <span className="ml-2 text-gray-800">A. 启动过程组</span>
                  </label>
                  
                  <label className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input type="radio" name="question" className="mt-0.5" />
                    <span className="ml-2 text-gray-800">B. 规划过程组</span>
                  </label>
                  
                  <label className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input type="radio" name="question" className="mt-0.5" />
                    <span className="ml-2 text-gray-800">C. 测试过程组</span>
                  </label>
                  
                  <label className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input type="radio" name="question" className="mt-0.5" />
                    <span className="ml-2 text-gray-800">D. 收尾过程组</span>
                  </label>
                </form>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 border-t border-gray-200">
                <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">上一题</button>
                
                <div className="flex items-center">
                  <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 mr-2">返回列表</button>
                  <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">下一题</button>
                </div>
              </div>
            </div>
            
            {/* 答题卡 */}
            <div className="mt-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h4 className="font-medium text-gray-800">答题卡</h4>
              </div>
              
              <div className="p-4">
                <div className="flex flex-wrap gap-3">
                  <button type="button" className="h-8 w-8 rounded-full bg-green-600 text-white font-medium flex items-center justify-center">1</button>
                  <button type="button" className="h-8 w-8 rounded-full bg-green-600 text-white font-medium flex items-center justify-center">2</button>
                  <button type="button" className="h-8 w-8 rounded-full bg-indigo-600 text-white font-medium flex items-center justify-center">3</button>
                  <button type="button" className="h-8 w-8 rounded-full bg-gray-200 text-gray-700 font-medium flex items-center justify-center">4</button>
                  <button type="button" className="h-8 w-8 rounded-full bg-gray-200 text-gray-700 font-medium flex items-center justify-center">5</button>
                  <button type="button" className="h-8 w-8 rounded-full bg-gray-200 text-gray-700 font-medium flex items-center justify-center">6</button>
                  <button type="button" className="h-8 w-8 rounded-full bg-gray-200 text-gray-700 font-medium flex items-center justify-center">7</button>
                  <button type="button" className="h-8 w-8 rounded-full bg-gray-200 text-gray-700 font-medium flex items-center justify-center">8</button>
                  <button type="button" className="h-8 w-8 rounded-full bg-gray-200 text-gray-700 font-medium flex items-center justify-center">9</button>
                  <button type="button" className="h-8 w-8 rounded-full bg-gray-200 text-gray-700 font-medium flex items-center justify-center">10</button>
                </div>
                
                <div className="mt-4 flex items-center text-sm">
                  <div className="flex items-center mr-4">
                    <div className="h-3 w-3 rounded-full bg-green-600 mr-1" />
                    <span className="text-gray-600">已完成</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <div className="h-3 w-3 rounded-full bg-indigo-600 mr-1" />
                    <span className="text-gray-600">当前题目</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-gray-200 mr-1" />
                    <span className="text-gray-600">未作答</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
                <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">提交练习</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 