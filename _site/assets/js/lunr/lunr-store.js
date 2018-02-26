var store = [{
        "title": "Ant Cheat Sheet",
        "excerpt":"This is a simple document introducing how to write the build.xml of Ant for your projects.Each Ant build.xml has a &lt;project&gt; element as the root element, this element can have a name attribute, which specify the name of this project; a basedir element, which determines the root path during the...","categories": [],
        "tags": ["project","tools"],
        "url": "http://localhost:4000/Ant-Cheat-Sheet/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "[Lintcode] Triangle Count",
        "excerpt":"Given an array of integers, how many three numbers can be found in the array, so that we can build an triangle whose three edges length is the three numbers that we find?The most naive solution is to enumerate all triples and then check if they can construct a triangle...","categories": [],
        "tags": ["algorithm","interview"],
        "url": "http://localhost:4000/Lintcode-Triangle-Count/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Simple Bloom Filter Implementation Part I",
        "excerpt":"Recently, I’m studying some basic concepts in distributed system. The materials I’m using is Distributed Systems Concepts. I know that simply reading the book is far not enough: the concepts are abstract, but we need to handle partical problem. So I decided to do some simple projects, using some existing...","categories": [],
        "tags": ["project","distributed system","data structure"],
        "url": "http://localhost:4000/Simple-Bloom-Filter-Implementation-Part-I/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "How To Read A Book",
        "excerpt":"This is the key part I read from the book «How To Read A Book», how to do analytical reading. Figure out what a book is about Classify the book according to kind and subject matter. (Is it a theory book or a practical book?) State what the whole book...","categories": [],
        "tags": ["reading"],
        "url": "http://localhost:4000/How-To-Read-A-Book/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Simple Bloom Filter Implementation Part 2",
        "excerpt":"IntroductionIn the last blog, we introduced the initial version of bloom filter. In the first implementation, we only tested our bloom filter on built in type String. This time, we tested in against a custom class Person. The idea is simple: we use thrift to define our custom data structure....","categories": [],
        "tags": ["project","distributed system","data structure"],
        "url": "http://localhost:4000/Simple-Bloom-Filter-Implementation-Part-2/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "[Hackerrank] Cut the tree",
        "excerpt":"The problem is available here. The idea is to use postorder traversal of the tree to enumerate each possible remove of edge, and return the sum of the sub-tree to its parent node. This problem represent the tree as a acyclic undirected graph, which is a quite wired representation.public class...","categories": [],
        "tags": ["algorithm","interview"],
        "url": "http://localhost:4000/Hackerrank-Cut-the-tree/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "[Lintcode] Count of Smaller Number before itself",
        "excerpt":"Give you an integer array (index from 0 to n-1, where n is the size of this array, value from 0 to 10000) . For each element Ai in the array, count the number of element before this element Ai is smaller than it and return count number array.In this...","categories": [],
        "tags": ["algorithm","interview"],
        "url": "http://localhost:4000/Lintcode-Count-of-Smaller-Number-before-itself/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "[Lintcode] Interval Sum II",
        "excerpt":"Given an integer array in the construct method, implement two methods query(start, end) and modify(index, value): For query(start, end), return the sum from index start to index end in the given array. For modify(index, value), modify the number in the given index to value public class Solution { private TreeNode...","categories": [],
        "tags": ["algorithm","interview"],
        "url": "http://localhost:4000/Lintcode-Interval-Sum-II/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "[CodeFights] NumberGameVI",
        "excerpt":"The problem is available here. A relatively straight forward game problem. If the current person want to win, the only requirement is that there exist a move can make B lose. And if there is no move can make B lose, then A will lose. Translate this into recursion and...","categories": [],
        "tags": ["algorithm","interview"],
        "url": "http://localhost:4000/CodeFights-NumberGameVI/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Design Pattern Summarization",
        "excerpt":"Design Pattern SummarizationStrategy PatternDefines a family of algorithms, encapsulate each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.[Image: file:///-/blob/eDDAAAJA4tZ/2DMfZKq387ZdSBlQHdKHXg]Use composition instead of inheritance to separate the detailed actions from the clients code. The detailed actions can be determined or changed in run...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Design-Pattern-Summarize/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Clean Code Summarize",
        "excerpt":"Here is just some tips I think is most useful for guiding me to write better code from book Clean Code: A Handbook of Agile Software Craftsmanship.##NamingWe cannot avoid naming things well we are writing code, a good name can considerably increase the readability of the code. We even does...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Clean-Code-Summarize/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Math Equation",
        "excerpt":"Use $$ to write math equationUse \\begin{equation} to write math equation\\begin{equation}\\sum_{n=1}^\\infty 1/n^2 = \\frac{\\pi^2}{6}\\end{equation}","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Math-Equation/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Reinforcement Learning Lesson 1",
        "excerpt":"This is the first post for the series reinforcement learning. The main source for the entire series is here. The post mainly focus on summarizing the content introduced in the video and slides, as well as some of my own understanding. Any feedback is welcomed.In this post, we will talk...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Reinforcement-Learning-Lesson-1/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Reinforcement Learning Lesson 2",
        "excerpt":"In the last post, we introduced the definition of Markov Decision Process and Bellman Equation. Now, if you are given the states $S$, action $A$, transition matrix $P$, rewards $R$ and discounting ratio $\\gamma$, how would you come up with a solution for this MDP? i.e. how would you calculate...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Reinforcement-Learning-Lesson-2/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Reinforcement Learning Lesson 3",
        "excerpt":"In this lesson, we will learn about what to do when we have no knowledge about the MDP. In the last lesson, we learnt about how to solve a MDP when we have full information about it (e.g. $P$, $R$). When we don’t have enough information, the Bellman Equation won’t...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Reinforcement-Learning-Lession-3/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Reinforcement Learning Lesson 4",
        "excerpt":"In this lecture, we learn how to solve an unknown MDP. In the last lecture, we introduced how to calculate the value function given a policy. In this one, we will try to find the optimize policy by ourselves.Mento Calro Policy IterationIn the Lesson 2, we mentioned how to solve...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Reinforcement-Learning-Lesson-4/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Reinforcement Learning Lesson 5",
        "excerpt":"In this post, we are going to look into how can we solve the real world problem with a practical way. Think of the state value function $v(s)$ or the action value function $q(s, a)$ we mentioned before. If the problem has a really large state space, then it would...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Reinforcement-Learning-Lesson-5/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Reinforcement Learning Lesson 6",
        "excerpt":"In the pervious we use a model to approximate the state value/action value function. In this post, we are going to learn how to directly parameterize a policy, which means we would directly get the probability of each action given a state:In this case, we are not going to have...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Reinforcment-Learning-Lesson-6/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Reinforcement Learning Lesson 7",
        "excerpt":"In the pervious notes, we are all using model-free reinforcement learning method to find the solution for the problem. Today we are going to introduce method that directly learns from the experience and tries to understand the underlaying world.From Lesson 1 we know that a MDP can be represent by...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Reinforcement-Learning-Lesson-7/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Reinforcement Learning Lesson 8",
        "excerpt":"This is the last lesson for the entire reinforcement learning, and in this lesson we will learn something related to exploit and explore. In machine learning service, like recommendation service, there is always a trade off between exploit and explore. Exploit means we are always choosing the best given the...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Reinforcement-Learning-Lesson-8/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "2017 年终终结",
        "excerpt":"2017年一转眼就过去了，自己也从一个刚刚毕业的学生成了一个快上了两年班的上班族了。趁着年末好好回顾一下这一整年发生的事情，一方面是给自己留个纪念，另一方面也是好好总结一下这一年的得失，找到改进的方向。工作前半年工作比较顺利，但是后半年工作比较艰辛。首先最开心的事情就是年初得升职了，然后上半年的表现的评级也还不错，算是对自己能力的一个肯定。但是下半年由于种种原因，主要负责的项目一直进展非常不顺利，而且最后没能发布出去，很郁闷。辛辛苦苦干了大半年，每天基本从早上9点工作到晚上10点才回家，每个周末也去公司加班，但是还是事与愿违。而且由于一直专注于这个项目，导致疏忽了其他的方面工作，例如roadmap啊，mentor新人啊之类的，和上半年比起来差不少。反思了一下，感觉还是太焦躁心急，不够沉稳。心里总是想着早点升职多赚钱什么的，然而往往事与愿违。尤其是自己的计划被打乱之后，整个人就会变得非常的消沉，郁闷。一个很好的例子就是今年回国H1B签证被check，导致在国内待了两个月。当时的心情是非常的郁闷，还经常自己吓唬自己万一拿不到签证回不去美国咋办，好好的工作没了，自己怎么就这么倒霉。现在回头看感觉自己当时真是好笑，本来两个月的时间完全可以出去逛逛玩玩当个长假来休息，但是由于自己太重视这份工作，使自己一直纠结于被check的这一无法改变的事实，在家愁了两个月。不过经历过这一出之后，自己的心态也有所改善，脾气基本上是给磨没了。现在遇到点事情能比当时更沉得住气一些了。然而离自己理想的境界还有很长的距离， 希望在今后的日子里能在“不以物喜，不以己悲”的修炼上更进一步。另一个就是要想办法挑战自己。最近在工作上一直处于自己的舒适区，只是在做一些自己已经很熟练的工作而不去做一些自己没有尝试过的更具有挑战性的事情。很大的程度上这是因为担心脱离舒适区的后果，比如想换组，但是万一换到别的组表现不如现在的好影响了自己的评级了咋办？风险自然是有的，磨难肯定也是不少，但是只有经历过这些，才能成长，才能有进一步的提高，才能有更广的可能性。套用钢之炼金术师里面的台词，“在经历过这些磨难之后，就能获得钢铁般的心”。最近刚刚看过了吴军老师对于职业发展的一个观点：“稀缺性”。现在自己的工作，换一个人来干一样能干，都是一些简单的写写代码，调调参数什么的。这说明自己的稀缺性还不够，想要增加自己的稀缺性，那么就要敢于去尝试一些别人不能做的事情，这种事情往往风险比较大，存在于舒适区之外。另一方面，就是要增加自己的见识，对自己的领域要有一些比较深入的看法和见解，因为这个东西，别人是不可能轻易学去的，当然培养这方面也很困难，需要大量的经验积累，而这种经验，如果一直处于舒适区，是很难获得的。学习年初定下来的好多计划最终都没有坚持下来：  想要学口琴，但是一点都没有练过  想要学习日语，但是没能坚持下来  想要学习GO语言，但是根本就没有开始  想要看一些开源的代码，结果没看过  想要做一些side project，但是一个也没做出来但是还是有一些坚持下来了：  每个月读一本书  学习了TensorFlow并且写了些简单的算法  自学了Reinforcement Learning感觉自己在增长新技能这方面有点不够专注，什么都想沾一手，但是最终的结果是什么都没有学到，典型的“想得太多，做得太少”。而且我还另一个特点，开始干一件事情的阈值很高，但是只要开始了，我就会坚持下去，尽量做到完美，这也表现出我不是一个半途而废的人，那么关键就是怎么开始了。所以在2018年，打算缩减自己的计划，把精力集中在两三个事情上，强迫自己开始并坚持下去。另一个就是自己不太擅长记录，比如读过的书，看过就扔了，没有提炼出一些个性化的东西；学过的一些技术，也是没有好好的总结，过一阵子也就忘记了。之前尝试过写读书笔记以及技术博客，但是都没有坚持下来。在新的一年里要坚持更新自己的博客。感情感情这一年就是很扎心了。先是跟前女友分手了，之后被一个妹子表白第二天就又被发卡，现在联系一个新认识的妹子结果一直不怎么受待见。这很可能跟我负能量比较多，不够自信有关。我这个人看待事物的时候有点消极，遇到什么事情总是喜欢把消极面放大而不会从积极的焦虑去考虑。然后自信也比较低，总感觉自己比不上别人。感觉这是自己性格方面的两个很重要的缺陷。为此我还买了本书叫《正能量》，想看看从心理学的角度怎么能改正一下。总而言之一句话就是表现的乐观就会感觉乐观，表现的自信就会感觉自信，即行为影响情绪。所以平时说话多用积极的字眼，经常保持微笑，不整天愁眉苦脸的，来帮助自己树立正能量和自信。除此之外，也更加深入的明白了一个道理，找女朋友这件事绝对不能将就，要找就找自己喜欢的，想一辈子过日子的。不能抱着说，“先谈着，慢慢培养感情”，这种思想。培养感情是要建立在一定的冲动之上，如果连一点喜欢的感觉都没有，强迫自己培养感情喜欢上对方，对方痛苦，你自己也痛苦，还浪费时间跟精力，实在不是明智之举。当然啦，平时跟基友也总吐槽自己单身，埋怨自己怎么找不到女朋友啥的，但是其实单身的生活还是比较享受的。每天想在公司加班就加班，想回家打游戏就打游戏，周末想去吃个日料就去吃个日料，想到咖啡店看书就去咖啡店看书。时间充分的自由支配也挺好的。生活生活方面感觉是这一年取得的成就最大的，那就是健身整整坚持了一整年，而且小有成效，再也不用为买什么衣服而发愁了哈哈。从上半年的每天坚持跑步，到下半年每天和同事去健身房做力量训练，虽然过程很痛苦，但是心里充满了成就感。年初的时候参加了公司组织的10km的长跑比赛，跑进了1小时；卧推现在能举起200lb以上；体重曾经一度控制在70kg，这些都是曾经我不敢想象的，然而通过自己的努力都做到了，非常的欣慰。另一个感觉很欣慰的事情就是成了一个狂热的咖啡和日料的爱好者。每个周末都会抽个半天去各种各样的咖啡店品尝咖啡看看书，体验一下不同的咖啡店的环境和氛围；晚上也会去各种日料店吃日料，顺便发个美食攻略贴。这些算是给自己单调的生活填上了一些乐趣。俗话说得好，“读万卷书，行万里路”。新的一年里想多出去走走，领略一下不同城市的风景。结语不管2017年怎么样，都已经成为过去，不必太纠结于这一整年的失落和痛苦，让那些成为以后酒桌上的笑谈。昂首挺胸，迎接崭新的一年！","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2017-%E5%B9%B4%E7%BB%88%E6%80%BB%E7%BB%93/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "Deep Work Reading Note",
        "excerpt":"“Deep Work” is the first book I read this year. I was pretty impressed by the idea and methods the author purposed to help you gain the ability to do “deep work”, which means how to be concentrate on the work that can really generate value. In this note, I...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Deep-Work-Reading-Note/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "2018 新年计划",
        "excerpt":"2018年的主题，就是要变得自信以及学会Deep Work!工作  升职加薪          跳出自己的安逸区，接受更具有挑战的项目      加深对C++和Python的理解      加深机器学习领域的研究，多读post, blog, paper，每两周写一篇blog总结      提高自己的见识，要多和高人交流，学习别人的经验      (bonus)发表一遍学术论文，参加一次学术会议      学习  完成一个side project          starcraft AI?      photo style transfer?      chatbot?        参加kaggle的比赛  一门新的语言: GO  一门新的计算机技术  每个月至少读一本书，每本书写一篇读后感生活  胸围再大一圈，练出腹肌          每天坚持去gym，坚持每次练一组腹肌强化      每周晨跑三次        日语          每周安排计划固定学习的时间      参加N2考试        口琴  出去旅游两次  喝遍湾区的咖啡店，逛遍湾区的书店  (bonus) 每周去尝试一家新的饭店","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2018-%E6%96%B0%E5%B9%B4%E8%AE%A1%E5%88%92/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "What I Read This Week 1",
        "excerpt":"The 3 Tricks That Made AlphaGo Zero WorkThis post explains why AlphaGo Zero out-perform than it’s elder brother AlphaGo, summarizing in 3 points that lead to the supreme result: Use the evaluations provided by MCTS to continually improve the neural network’s evaluations of the board position, instead of using human...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/What-I-Read-This-Week-I/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "读书有感 1",
        "excerpt":"最近两天读了两本书，分别是武志红的《你就是答案》和史蒂芬柯维的《高效能人士的七个习惯》。这两本书都算是提升自我修养的书，但是有人可能这时候就嚷嚷说：“啊，这都是鸡汤，不要被鸡汤给灌糊涂了”。诚然这两本书的确有鸡汤的性质，但是里面的内容还是很在理的，即使说这些东西你其实早就知道，但是再读一读，还是能够进一步加深自己的认知和理解的。下面我就着重说几个给我印象最深刻的部分。  生命是一个历程，一个整体，我们不能太在乎一时的得失，成长才是最重要的。这一点对我的触动是最大的。在现实生活中，我是一个得失心非常重的人，经常把眼前的结果看的非常非常重要。比如说最近的年底考核，我上个half每天加班工作，就是希望最后能得到升职的机会，然而事与愿违，今天跟老板meeting，说我没能升上去，打击很大。这就开始有点自暴自弃，不想再好好干活了，成了一个“自断经脉的打工族”。这正反应出，我自己并没有什么人生目标，认为自己的价值就是根据这种外界的物质来衡量的，所谓的“以荣誉为中心的生活”。我应该学会调整自己，拒绝以这种外界的物质来衡量自己，而是真正的明白自己想成为什么样的人，想做什么样的事情。我们要有一个好的人生规划，包括一个一以贯之的目标，以及从整体的角度看待生命。想找的目标不是一件容易的事情，我打算参考《高效能人士的七个习惯》中的“个人使命宣言”来逐渐认清自己，找到自己的人生目标。  遇到挫折要做到对事不对人我发觉自己的“挫折商”不够强大，遇到点不顺心的事情，就开始夸大其后果，否定自己的能力，任由其影响自己。挫折商可以从四个方面来衡量，控制，归因，延伸以及忍耐。想要提升挫折商，试试下面的方法：  任何时候，都要问问自己，“我可以做什么”。  内向归因，问题发生时，问问自己该承担什么样的责任，而自己又可以如何去改变。  不把问题扩大。哦，有失败发生了，但它就是这么一件事情而已，这并不意味着我其他方面有问题。  如果你真的确定一件事可以做，它是有道理的，那么努力将其进行到底。  跳好爱情的双人舞之前的好一段时间都被感情的事情困扰：要么就是自己心仪很久的女生追求不到，要么就是新认识的女生对自己爱答不理的。很自卑，一度有“注孤生”的感觉。但是其实这大可不必要，保持积极乐观的态度，坦然真诚的对待女生，相信自己值得被爱，总是能遇到合适的人的。除此之外，爱情需要深深的理解和接受，我不能太过于“外貌协会”，而要真正的去了解对方的内心世界，接纳真实的对方。  第四代时间管理这个是我从《高效能人士的七个习惯》中得到的最有价值的一点。这个第四代的时间管理有几个最主要的方面：  按照自己所处的角色不同，设定不同的任务，然而这些任务需要以第二类任务为主（不紧急，重要）  以一周为计划来安排这些任务  每天跟进进度进行调整比如下图就是我尝试制定的一个一周的计划表这样做的益处是可以帮助自己专注于第二类任务，从而使自己得到真正的提高，更加符合自己的“个人使命宣言”。","categories": [],
        "tags": [],
        "url": "http://localhost:4000/%E8%AF%BB%E4%B9%A6%E6%9C%89%E6%84%9F-1/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "What I Read This Week 2",
        "excerpt":"Evolving search recommendations on PinterestA post introducing the search work done in Pinterest. Initially they use a Term-Query graph to generate candidates. In this graph, each term (a single word) is represent a node, as well as the query. Each term node is connected to the query, weighted by the...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/What-I-Read-This-Week-2/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "DQN In Practice",
        "excerpt":"Recently I have been working on Deep-Q-Learning and apply it to some interesting AI games. In this post, I would like to give a brief introduction to how I implemented the Deep-Q-Learning, as well as lots of learning along the way.What is DQNTo understand DQN, we need first know is...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/DQN-In-Practice/",
        "teaser":"http://localhost:4000/assets/violet.jpg"},{
        "title": "What I Read This Week 3",
        "excerpt":"Explicit vs. Implicit Recommenders Never use RMSE (or other metrics only take explicit feedback (e.g. rating)) as measurement for your recommendation system Implicit feedback (e.g. click/view) is far more valuable than explicit one Netflix is not using star anymore as an effort to remove explicit feedbackThis is a pretty interesting...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/What-I-Read-This-Week-3/",
        "teaser":"http://localhost:4000/assets/violet.jpg"}]
