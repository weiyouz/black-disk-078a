import { Link, useParams } from "@remix-run/react";

export default function CourseDetail() {
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
            <Link to="/courses" className="mr-4 text-gray-500 hover:text-gray-700">
              <i className="ri-arrow-left-line text-xl" />
            </Link>
            <h2 className="text-lg font-medium text-gray-800">项目管理专业课程</h2>
            <div className="ml-8 flex space-x-4">
              <button type="button" className="px-3 py-1 rounded-md bg-indigo-100 text-indigo-700 text-sm font-medium">课程内容</button>
              <Link to={`/course/practice`} className="px-3 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100">随堂练习</Link>
              <button type="button" className="px-3 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100">讨论区</button>
              <button type="button" className="px-3 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100">课程资料</button>
            </div>
          </div>
          
          <div className="flex items-center">
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
        
        {/* 视频内容区 */}
        <div className="flex-1 flex bg-gray-50">
          {/* 左侧章节列表 */}
          <div className="w-[300px] border-r border-gray-200 overflow-auto">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">课程章节</h3>
              
              <div className="mt-4 space-y-2">
                <div className="text-sm font-medium text-gray-500 px-2 py-1">第一单元：项目管理基础</div>
                
                <div className="rounded-lg bg-indigo-50 border-l-4 border-indigo-600 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="ri-play-circle-fill text-indigo-600 text-xl mr-2" />
                      <span className="text-sm font-medium text-gray-800">1.1 项目管理概述</span>
                    </div>
                    <div className="text-xs text-green-600 font-medium">已完成</div>
                  </div>
                  <div className="text-xs text-gray-500 ml-6 mt-1">30分钟</div>
                </div>
                
                <div className="rounded-lg hover:bg-gray-100 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="ri-file-text-line text-gray-500 text-xl mr-2" />
                      <span className="text-sm font-medium text-gray-800">1.2 项目生命周期</span>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">45分钟</div>
                  </div>
                </div>
                
                <div className="rounded-lg hover:bg-gray-100 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="ri-file-text-line text-gray-500 text-xl mr-2" />
                      <span className="text-sm font-medium text-gray-800">1.3 项目管理过程组</span>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">40分钟</div>
                  </div>
                </div>
                
                <div className="text-sm font-medium text-gray-500 px-2 py-1 mt-6">第二单元：项目范围管理</div>
                
                <div className="rounded-lg hover:bg-gray-100 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="ri-file-text-line text-gray-500 text-xl mr-2" />
                      <span className="text-sm font-medium text-gray-800">2.1 范围规划</span>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">35分钟</div>
                  </div>
                </div>
                
                <div className="rounded-lg hover:bg-gray-100 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="ri-file-text-line text-gray-500 text-xl mr-2" />
                      <span className="text-sm font-medium text-gray-800">2.2 需求收集</span>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">50分钟</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 右侧视频播放区 */}
          <div className="flex-1 p-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative aspect-video bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="视频封面" className="w-full h-full object-cover opacity-50" />
                  <button type="button" className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-indigo-600 bg-opacity-90 text-white">
                    <i className="ri-play-fill text-4xl" />
                  </button>
                  
                  {/* 底部控制栏 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-4 py-3">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-3">
                        <button type="button"><i className="ri-play-fill text-xl" /></button>
                        <button type="button"><i className="ri-volume-up-fill text-xl" /></button>
                        <span className="text-sm">12:45 / 30:00</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button type="button"><i className="ri-speed-fill text-lg" /></button>
                        <button type="button"><i className="ri-fullscreen-fill text-lg" /></button>
                      </div>
                    </div>
                    
                    <div className="mt-2 h-1 bg-gray-500 bg-opacity-50 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500" style={{ width: "42%" }} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">1.1 项目管理概述</h3>
                <p className="text-sm text-gray-600 mt-2">本节将介绍项目管理的基本概念、项目的特性以及项目经理的角色与职责。通过这节课，您将了解项目管理的重要性及其在组织中的价值。</p>
                
                <div className="mt-6 flex items-center">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="讲师头像" className="h-10 w-10 rounded-full" />
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-800">王教授</div>
                    <div className="text-xs text-gray-500">项目管理专家</div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center space-x-4">
                  <button type="button" className="flex items-center text-sm text-gray-700 hover:text-indigo-600">
                    <i className="ri-download-line mr-1" /> 下载讲义
                  </button>
                  <button type="button" className="flex items-center text-sm text-gray-700 hover:text-indigo-600">
                    <i className="ri-bookmark-line mr-1" /> 收藏
                  </button>
                  <button type="button" className="flex items-center text-sm text-gray-700 hover:text-indigo-600">
                    <i className="ri-question-line mr-1" /> 提问
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">课程笔记</h3>
              <textarea className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none" placeholder="在这里记录您的学习笔记..." />
              <button type="button" className="mt-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition">保存笔记</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 