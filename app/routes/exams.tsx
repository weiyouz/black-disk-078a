import { Link } from "@remix-run/react";

export default function Exams() {
  return (
    <div className="flex w-full h-screen">
      {/* 左侧导航栏 */}
      <div className="w-[220px] bg-gray-800 text-white">
        <div className="p-6">
          <h2 className="text-xl font-bold">学习系统</h2>
        </div>
        
        <nav className="mt-6">
          <Link to="/courses" className="flex items-center px-6 py-3 hover:bg-gray-700 transition">
            <i className="ri-book-open-line mr-3 text-lg" />
            <span>我的课程</span>
          </Link>
          <Link to="/learning-plan" className="flex items-center px-6 py-3 hover:bg-gray-700 transition">
            <i className="ri-calendar-line mr-3 text-lg" />
            <span>学习计划</span>
          </Link>
          <Link to="/exams" className="flex items-center px-6 py-3 bg-gray-700">
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
            <h2 className="text-lg font-medium text-gray-800">考试中心</h2>
            <div className="ml-8 flex space-x-2">
              <button type="button" className="px-3 py-1 rounded-md bg-indigo-100 text-indigo-700 text-sm font-medium">全部考试</button>
              <button type="button" className="px-3 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100">待参加</button>
              <button type="button" className="px-3 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100">已完成</button>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="relative mr-4">
              <input type="text" placeholder="搜索考试" className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              <i className="ri-search-line absolute left-3 top-2.5 text-gray-400" />
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
        
        {/* 考试内容区 */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <i className="ri-alarm-warning-fill text-red-500 text-xl mr-2" />
                <span className="text-red-600 font-medium">您有1场考试即将开始</span>
              </div>
              <button type="button" className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700">立即参加</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 待参加考试 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-orange-200">
              <div className="p-5 bg-orange-50 border-b border-orange-200 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-orange-600 text-white flex items-center justify-center">
                    <i className="ri-timer-line text-2xl" />
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-bold text-gray-800">项目管理期中考试</div>
                    <div className="text-sm text-gray-600">必考考试 · 120分钟</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                  即将开始
                </div>
              </div>
              
              <div className="p-5">
                <div className="mb-4">
                  <div className="text-sm text-gray-500">考试科目</div>
                  <div className="text-sm text-gray-800">项目管理专业课程（中级）</div>
                </div>
                
                <div className="flex space-x-12 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">开始时间</div>
                    <div className="text-sm text-gray-800">2023-06-20 19:00</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">结束时间</div>
                    <div className="text-sm text-gray-800">2023-06-20 21:00</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-500">考试说明</div>
                  <div className="text-sm text-gray-600">本次考试包含单选题、多选题和案例分析题，满分100分，及格分数为60分。</div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500 mr-2">距离开始还有：</span>
                    <span className="text-sm font-medium text-orange-600">1天 3小时 24分钟</span>
                  </div>
                  <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 text-sm">查看考试指南</button>
                </div>
              </div>
            </div>
            
            {/* 已完成考试 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-5 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-green-600 text-white flex items-center justify-center">
                    <i className="ri-checkbox-circle-line text-2xl" />
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-bold text-gray-800">项目管理基础知识测试</div>
                    <div className="text-sm text-gray-600">单元测试 · 60分钟</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                  已完成
                </div>
              </div>
              
              <div className="p-5">
                <div className="mb-4">
                  <div className="text-sm text-gray-500">考试科目</div>
                  <div className="text-sm text-gray-800">项目管理专业课程（初级）</div>
                </div>
                
                <div className="flex space-x-12 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">考试时间</div>
                    <div className="text-sm text-gray-800">2023-06-10 15:00-16:00</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">成绩</div>
                    <div className="text-sm font-medium text-green-600">85分（及格）</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-500">评语</div>
                  <div className="text-sm text-gray-600">基础知识掌握扎实，案例分析题有待提高，建议加强对项目风险管理的理解。</div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500 mr-2">完成用时：</span>
                    <span className="text-sm text-gray-600">49分钟</span>
                  </div>
                  <div className="flex space-x-2">
                    <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 text-sm">查看详情</button>
                    <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">查看答案</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 