#Actions文件:
用户行为

    const ADD_TODO = 'ADD_TODO'
    {
      type: ADD_TODO,
      text: 'Build my first Redux app'
    }

#Component文件:
组件
目的:如何显示(样式,布局);
读取数据:从props获取数据;
修改数据:从props调用回调函数;
实现方法:手写

#Container文件:
组件
目的:如何工作(数据获取,状态更新);
读取数据:从Redux获取state;
修改数据:向Redux派发actions;
实现方法:由react-redux生成


#Reducer文件:
store里分发Action的行为
store:
action作用于store;
reducer根据store响应;
store是唯一的;
store包含了完整的state;
state完全可预测;

#Router
路由配置
