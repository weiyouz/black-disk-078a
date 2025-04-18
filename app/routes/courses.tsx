import { Link } from "@remix-run/react";

export default function Courses() {
  return (
    <div className="flex w-full h-screen">
      {/* 左侧导航栏 */}
      <div className="w-[220px] bg-gray-800 text-white">
        <div className="p-6">
          <h2 className="text-xl font-bold">学习系统</h2>
        </div>
        
        <nav className="mt-6">
          <Link to="/courses" className="flex items-center px-6 py-3 bg-gray-700">
            <i className="ri-book-open-line mr-3 text-lg"></i>
            <span>我的课程</span>
          </Link>
          <Link to="/learning-plan" className="flex items-center px-6 py-3 hover:bg-gray-700 transition">
            <i className="ri-calendar-line mr-3 text-lg"></i>
            <span>学习计划</span>
          </Link>
          <Link to="/exams" className="flex items-center px-6 py-3 hover:bg-gray-700 transition">
            <i className="ri-file-list-line mr-3 text-lg"></i>
            <span>考试中心</span>
          </Link>
          <Link to="/certificates" className="flex items-center px-6 py-3 hover:bg-gray-700 transition">
            <i className="ri-medal-line mr-3 text-lg"></i>
            <span>证书管理</span>
          </Link>
          <Link to="/settings" className="flex items-center px-6 py-3 hover:bg-gray-700 transition">
            <i className="ri-settings-line mr-3 text-lg"></i>
            <span>个人设置</span>
          </Link>
        </nav>
      </div>
      
      {/* 右侧内容区 */}
      <div className="flex-1 flex flex-col">
        {/* 顶部二级导航 */}
        <header className="h-16 border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center">
            <h2 className="text-lg font-medium text-gray-800">我的课程</h2>
            <div className="ml-8 flex space-x-2">
              <button className="px-3 py-1 rounded-md bg-indigo-100 text-indigo-700 text-sm font-medium">全部</button>
              <button className="px-3 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100">进行中</button>
              <button className="px-3 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100">已完成</button>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="relative mr-4">
              <input type="text" placeholder="搜索课程" className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              <i className="ri-search-line absolute left-3 top-2.5 text-gray-400"></i>
            </div>
            
            <div className="flex items-center">
              <button className="relative p-1 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <i className="ri-notification-3-line text-xl"></i>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              
              <div className="ml-4 flex items-center">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="用户头像" className="h-8 w-8 rounded-full" />
                <span className="ml-2 text-sm font-medium text-gray-700">李明</span>
                <i className="ri-arrow-down-s-line ml-1 text-gray-500"></i>
              </div>
            </div>
          </div>
        </header>
        
        {/* 课程内容区 */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 课程卡片 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-3 right-3 bg-indigo-600 text-white px-2 py-1 rounded text-xs font-medium">进行中</div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800 mb-2">项目管理专业课程</h3>
                <p className="text-sm text-gray-600 mb-4">学习专业的项目管理知识，提升团队协作与执行效率</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-500">完成进度</div>
                    <div className="mt-1 h-2 w-36 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-600">65% 完成</div>
                  </div>
                  
                  <Link to="/course/1" className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition">
                    <i className="ri-play-fill text-xl"></i>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* 课程卡片 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">新课程</div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800 mb-2">数据分析与可视化</h3>
                <p className="text-sm text-gray-600 mb-4">掌握数据分析技能与数据可视化工具的实践应用</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-500">完成进度</div>
                    <div className="mt-1 h-2 w-36 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-600">25% 完成</div>
                  </div>
                  
                  <Link to="/course/2" className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition">
                    <i className="ri-play-fill text-xl"></i>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* 课程卡片 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-3 right-3 bg-gray-600 text-white px-2 py-1 rounded text-xs font-medium">已完成</div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800 mb-2">商务英语沟通技巧</h3>
                <p className="text-sm text-gray-600 mb-4">提升职场英语交流能力，掌握国际商务谈判技巧</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-500">完成进度</div>
                    <div className="mt-1 h-2 w-36 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-600">100% 完成</div>
                  </div>
                  
                  <Link to="/course/3" className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition">
                    <i className="ri-file-list-line text-lg"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 