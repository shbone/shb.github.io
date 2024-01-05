import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as n,c as i,e as c,a,b as e,d as s,f as d}from"./app-b4594200.js";const l="/assets/java/JVM框架图.png",h={},p=a("h1",{id:"jvm内存结构",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#jvm内存结构","aria-hidden":"true"},"#"),e(" JVM内存结构")],-1),_=a("p",null,[e("Java Virtual Machine(JAVA虚拟机，JVM)内存结构, 包括 "),a("strong",null,"程序计数器，虚拟机栈，本地方法栈，方法区，堆几部分组成"),e("。JVM的使用是为保证Java程序跨平台运行，在操作系统层次之上构建的虚拟机，以便实现一次编译，到处运行。")],-1),v={class:"hint-container tip"},m=a("p",{class:"hint-container-title"},"提示",-1),u={href:"https://tobebetterjavaer.com/jvm/zongjie.html#_1-3-hotspot-vm",target:"_blank",rel:"noopener noreferrer"},f=d('<figure><img src="'+l+'" alt="&quot;框架图&quot;" tabindex="0" loading="lazy"><figcaption>图1 JVM框架图</figcaption></figure><h2 id="_1-程序计数器pc" tabindex="-1"><a class="header-anchor" href="#_1-程序计数器pc" aria-hidden="true">#</a> 1. 程序计数器PC</h2><p>程序计数器用于存放执行指令的地方，可以<strong>看成当前线程所执行的字节码的信号指示器。</strong> 在线程的虚拟机栈中存储。程序计数器用来确定下一条指令执行的位置。</p><h2 id="_2-虚拟机栈-jvm-stack" tabindex="-1"><a class="header-anchor" href="#_2-虚拟机栈-jvm-stack" aria-hidden="true">#</a> 2. 虚拟机栈 JVM Stack</h2><p>线程运行需要的内存空间，一个栈由多个栈帧组成，一个栈帧对应一个线程，栈帧的生命周期与线程相互对应，保存着参数、返回值、局部变量信息。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>如果线程请求的栈深度大于虚拟机所允许的栈深度，将抛出<code>StackOverflowError</code>异常；</li><li>如果 Java 虚拟机栈的容量允许动态扩展，当栈扩展时如果无法申请到足够的内存会抛出 <code>OutOfMemoryError</code>异常</li></ul></div><h2 id="_3-本地方法栈-native-method-stack" tabindex="-1"><a class="header-anchor" href="#_3-本地方法栈-native-method-stack" aria-hidden="true">#</a> 3. 本地方法栈 Native Method Stack</h2><p>本地方法栈（Native Method Stacks）与虚拟机栈类似，其区别在于：Java 虚拟机栈是为虚拟机执行 Java 方法（也就是字节码）服务，而本地方法栈则是为虚拟机使用到的本地（Native）方法服务，线程私有的。</p><h2 id="_4-堆-heap" tabindex="-1"><a class="header-anchor" href="#_4-堆-heap" aria-hidden="true">#</a> 4. 堆 Heap</h2><p>Java 堆（Java Heap）是虚拟机所管理的最大一块的内存空间，它被所有线程所共享，用于存放对象实例。Java 堆可以处于物理上不连续的内存空间中，但在逻辑上它应该被视为是连续的。Java 堆可以被实现成固定大小的，也可以是可扩展的，当前大多数主流的虚拟机都是按照可扩展来实现的，即可以通过最大值参数 <code>-Xmx</code> 和最小值参数 <code>-Xms</code> 进行设定。如果 Java 堆中没有足够的内存来完成实例分配，并且堆也无法再扩展时，Java 虚拟机将会抛出 <code>OutOfMemoryError</code> 异常。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>jps 查看java进程</p><ul><li>系统中查看java进程</li></ul><p>jmap 查看Heap占用</p><ul><li><code>jmap -heap 进程号</code></li></ul><p>jconsole 查看JVM内存占用情况</p><ul><li>图形化界面连续监控</li></ul></div><h2 id="_5-方法区-method-area" tabindex="-1"><a class="header-anchor" href="#_5-方法区-method-area" aria-hidden="true">#</a> 5. 方法区 Method area</h2><p>方法区（Method Area）也是各个线程共享的内存区域，它用于存储已被虚拟机加载的类型信息、常量、静态变量、即时编译器编译后的代码缓存等数据。方法区也被称为 “非堆”，目的是与 Java 堆进行区分。《Java 虚拟机规范》规定，如果方法区无法满足新的内存分配需求时，将会抛出 <code>OutOfMemoryError</code> 异常。</p><p><strong>运行时常量池（Runtime Constant Pool）是方法区的一部分，用于存放常量池表（Constant Pool Table）</strong>，常量池表中存放了编译期生成的各种符号字面量和符号引用。</p>',14);function J(j,M){const t=r("ExternalLinkIcon");return n(),i("div",null,[p,_,c(" more "),a("div",v,[m,a("ul",null,[a("li",null,[e("参考："),a("a",u,[e("JVM 核心知识点总结"),s(t)])])])]),f])}const x=o(h,[["render",J],["__file","jvm_structure.html.vue"]]);export{x as default};
