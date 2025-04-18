import { Link } from "@remix-run/react";

export default function LearningPlan() {
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
          <Link to="/learning-plan" className="flex items-center px-6 py-3 bg-gray-700">
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
            <h2 className="text-lg font-medium text-gray-800">学习计划</h2>
            <div className="ml-8 flex space-x-2">
              <button type="button" className="px-3 py-1 rounded-md bg-indigo-100 text-indigo-700 text-sm font-medium">本周</button>
              <button type="button" className="px-3 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100">本月</button>
              <button type="button" className="px-3 py-1 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-100">全部</button>
            </div>
          </div>
          
          <div className="flex items-center">
            <button type="button" className="mr-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
              <i className="ri-add-line mr-1" />
              新建计划
            </button>
            
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
        
        {/* 学习计划内容区 */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="grid grid-cols-3 gap-6">
            {/* 左侧面板 */}
            <div className="col-span-2 space-y-6">
              {/* 今日学习概览 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">今日学习概览</h3>
                  <div className="text-sm text-gray-500">
                    {new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg bg-indigo-50 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-gray-600 text-sm">学习时长</div>
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                          <i className="ri-time-line text-indigo-600" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-800">1.5小时</div>
                      <div className="text-xs text-gray-500 mt-1">较昨日 +0.5小时</div>
                    </div>
                    
                    <div className="rounded-lg bg-green-50 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-gray-600 text-sm">完成章节</div>
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <i className="ri-book-3-line text-green-600" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-800">2节</div>
                      <div className="text-xs text-gray-500 mt-1">较昨日 +1节</div>
                    </div>
                    
                    <div className="rounded-lg bg-purple-50 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-gray-600 text-sm">学习积分</div>
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <i className="ri-award-line text-purple-600" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-800">120分</div>
                      <div className="text-xs text-gray-500 mt-1">较昨日 +30分</div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-700 mb-3">今日推荐课程</h4>
                    <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                      <div className="h-12 w-12 bg-cover rounded mr-3" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">项目管理专业课程 - 1.2 项目生命周期</div>
                        <div className="text-xs text-gray-500 mt-1">推荐理由：根据您的学习进度和兴趣</div>
                      </div>
                      <Link to="/course/1" className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
                        继续学习
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 学习进度 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">本周学习进度</h3>
                  <div className="text-sm text-indigo-600 font-medium">查看全部</div>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-sm font-medium text-gray-800">项目管理专业课程</div>
                        <div className="text-xs text-gray-500">12/20 章节</div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-sm font-medium text-gray-800">数据分析与可视化</div>
                        <div className="text-xs text-gray-500">5/18 章节</div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-sm font-medium text-gray-800">领导力与团队管理</div>
                        <div className="text-xs text-gray-500">3/15 章节</div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 右侧面板 */}
            <div className="space-y-6">
              {/* 学习目标 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">学习目标</h3>
                  <button type="button" className="text-sm text-indigo-600 hover:text-indigo-800">
                    <i className="ri-add-line" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-0.5 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked readOnly />
                      <div className="ml-2">
                        <h5 className="text-sm font-medium text-gray-800 line-through">完成项目管理第一单元测试</h5>
                        <div className="text-xs text-gray-500">截止日期：6月15日</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-0.5 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <div className="ml-2">
                        <h5 className="text-sm font-medium text-gray-800">完成数据分析课程实践作业</h5>
                        <div className="text-xs text-gray-500">截止日期：6月20日</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-0.5 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <div className="ml-2">
                        <h5 className="text-sm font-medium text-gray-800">参加项目管理线上研讨会</h5>
                        <div className="text-xs text-gray-500">截止日期：6月25日</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-0.5 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <div className="ml-2">
                        <h5 className="text-sm font-medium text-gray-800">准备领导力课程期中考试</h5>
                        <div className="text-xs text-gray-500">截止日期：6月30日</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 学习日历 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">学习日历</h3>
                  <div className="text-sm text-gray-500">2023年6月</div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    <div className="text-gray-500 font-medium">日</div>
                    <div className="text-gray-500 font-medium">一</div>
                    <div className="text-gray-500 font-medium">二</div>
                    <div className="text-gray-500 font-medium">三</div>
                    <div className="text-gray-500 font-medium">四</div>
                    <div className="text-gray-500 font-medium">五</div>
                    <div className="text-gray-500 font-medium">六</div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1 text-center mt-2">
                    <div className="p-2 text-gray-400">28</div>
                    <div className="p-2 text-gray-400">29</div>
                    <div className="p-2 text-gray-400">30</div>
                    <div className="p-2 text-gray-400">31</div>
                    <div className="p-2">1</div>
                    <div className="p-2">2</div>
                    <div className="p-2">3</div>
                    
                    <div className="p-2">4</div>
                    <div className="p-2">5</div>
                    <div className="p-2">6</div>
                    <div className="p-2">7</div>
                    <div className="p-2">8</div>
                    <div className="p-2">9</div>
                    <div className="p-2 rounded-full bg-indigo-600 text-white">10</div>
                    
                    <div className="p-2">11</div>
                    <div className="p-2 rounded-full bg-green-100 text-green-800">12</div>
                    <div className="p-2">13</div>
                    <div className="p-2">14</div>
                    <div className="p-2 rounded-full bg-indigo-100 text-indigo-800">15</div>
                    <div className="p-2 rounded-full bg-indigo-100 text-indigo-800">16</div>
                    <div className="p-2">17</div>
                    
                    <div className="p-2">18</div>
                    <div className="p-2">19</div>
                    <div className="p-2 rounded-full bg-orange-100 text-orange-800">20</div>
                    <div className="p-2">21</div>
                    <div className="p-2">22</div>
                    <div className="p-2">23</div>
                    <div className="p-2">24</div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-indigo-600 mr-1"></div>
                      <span>考试</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-100 mr-1"></div>
                      <span>作业</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-indigo-100 mr-1"></div>
                      <span>截止</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-orange-100 mr-1"></div>
                      <span>研讨会</span>
                    </div>
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