
<template>
     <div class="h-screen">
          <div class="mt-[50px]">
               <div class="mt-2 flex justify-center">
                    <h2 class="text-[28px] font-semibold sm:text-4xl  text-center
            bg-gradient-to-r bg-clip-text  text-transparent p-2
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text">
                         Your Roadmap to Understanding Amazon Web Services and <br>
                         Becoming Cloud Enginner
                    </h2>

               </div>
               <div class="w-full max-w-3xl mx-auto mt-7">

                    <!-- Vertical Timeline #1 -->
                    <div class="-my-6">

                         <!-- Item #1 -->
                         <div class="relative pl-8 sm:pl-32 py-6 group">
                              <!-- Purple label -->
                            <div class="flex justify-between p-[12px]">
                              <a class="font-[Caveat] font-medium text-3xl text-indigo-500 mb-1 sm:mb-0" href="https://git-scm.com/" target="_blank">Git</a>
                              <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                              <div
                                   class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                   <div
                                        class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 ">
                                        <a href="https://git-scm.com/" target="_blank"><img src="../../public/images/icon-git.svg" class="" alt=""></a>
                                   </div>


                              </div>
                            </div>
                              <!-- Content -->
                              <div :class="{ 'dark:text-[#e4e4e4]': isDark, ' text-black': !isDark }" class=" font-light">
                                   Git is like a smart tool for teams of people working on computer code, helping them to keep track of changes they make, work together without stepping on each other's toes, and make sure the software they're building stays reliable and up-to-date.</div>
                         </div>
                         <div class="relative pl-8 sm:pl-32 py-6 group">
                              <!-- Purple label -->
                            <div class="flex justify-between p-[12px]">
                              <a class="font-[Caveat] font-medium text-3xl text-indigo-500 mb-1 sm:mb-0"  href="https://github.com/" target="_blank" >GitHub</a>
                              <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                              <div
                                   class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 ml-[5px]">
                                   <div v-if="!isDark"
                                        class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 ">
                                        <a href="https://github.com/" target="_blank" ><img src="../../public/images/github-mark.svg" alt=""></a>
                                   </div>
                                   <div v-if="isDark"
                                        class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 ">
                                       <a href="https://github.com/" target="_blank"> <img src="../../public/images/icon-github.svg" alt=""></a>
                                   </div>


                              </div>
                            </div>
                              <!-- Content -->
                              <div :class="{ 'dark:text-[#e4e4e4]': isDark, ' text-black': !isDark }" class=" font-light">
                                   GitHub is really important in DevOps because it's like a shared space online where teams can store and work on their code together, making it easier for everyone to collaborate and manage the development process.</div>
                         </div>

                         <!-- Item #2 -->
                         <div class="relative pl-8 sm:pl-32 py-6 group">
                              <!-- Purple label -->
                             <div class="flex justify-between p-[12px]">
                              <a class="font-[Caveat] font-medium text-3xl text-indigo-500 mb-1 sm:mb-0" href="https://www.docker.com/" target="_blank">Docker
                              </a>
                              <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                              <div
                                   class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                   <div
                                        class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 ">
                                        <img src="../../public/images/icon-docker.svg" alt="">
                                   </div>
                                  
                              </div>
                             </div>
                              <!-- <div class="text-xl font-normal"
                                        :class="{ 'dark:text-[#e4e4e4]': isDark, ' text-black': !isDark }">Acme was founded
                                        in Milan, Italy</div> -->
                              <!-- Content -->
                              <div :class="{ 'dark:text-[#e4e4e4]': isDark, ' text-black': !isDark }" class=" font-light">
                                   Docker is like a magic box for software that lets developers put their programs and all the things those programs need to run, so they work the same way no matter where you use them..</div>
                         </div>

                         <!-- Item #3 -->
                         <div class="relative pl-8 sm:pl-32 py-6 group">
                              <!-- Purple label -->
                             <div class="flex justify-between p-[12px]">
                              <a class="font-[caveat] font-medium text-3xl text-indigo-500 mb-1 sm:mb-0" href="https://www.jenkins.io/"> Jenkins
                              </a>
                              <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                              <div
                                   class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                   <div
                                        class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 ">
                                        <a href="https://www.jenkins.io/"><img src="../../public/images/icon-jenkins.svg" alt=""></a>
                                   </div>
                              </div>
                             </div>
                              <!-- <div class="text-xl font-normal"
                                        :class="{ 'dark:text-[#e4e4e4]': isDark, ' text-black': !isDark }">Acme was founded
                                        in Milan, Italy</div> -->
                              <!-- Content -->
                              <div :class="{ 'dark:text-[#e4e4e4]': isDark, ' text-black': !isDark }" class=" font-light">
                                   Jenkins is like a helpful assistant for developers that automates and organizes the process of building, testing, and deploying software, making it easier and faster to deliver new features and updates.</div>
                         </div>

                         <!-- Item #4 -->
                         <div class="relative pl-8 sm:pl-32 py-6 group">
                              <!-- Purple label -->
                            <div class="flex justify-between p-[12px]">
                              <a class="font-[caveat] font-medium text-2xl text-indigo-500 mb-1 sm:mb-0" href="https://aws.amazon.com/" target="_blank">Amazon Web Services</a>
                              <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                              <div
                                   class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                   <div v-if="isDark"
                                        class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-16 h-5 mb-3 sm:mb-0 ">
                                        <a href="https://aws.amazon.com/" target="_blank"><img src="../../public/images/icon-aws-light.svg" alt=""></a>
                                   </div>
                                   <div v-if="!isDark"
                                        class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-16 h-5 mb-3 sm:mb-0 ">
                                        <a href="https://aws.amazon.com/" target="_blank"><img src="../../public/images/icon-aws-dark.svg" alt=""></a>
                                   </div>
                            </div>
                              </div>
                              <!-- <div class="text-xl font-normal"
                                        :class="{ 'dark:text-[#e4e4e4]': isDark, ' text-black': !isDark }">Acme was founded
                                        in Milan, Italy</div> -->
                              <!-- Content -->
                              <div :class="{ 'dark:text-[#e4e4e4]': isDark, ' text-black': !isDark }" class=" font-light">
                                   In Simple words, AWS is like an online toolkit providing various computer services, helping businesses run their websites and applications without managing physical servers.</div>
                         </div>
                         <div class="relative pl-8 sm:pl-32 py-6 group">
                              <!-- Purple label -->
                            <div class="flex justify-between p-[12px]">
                              <a class="font-[caveat] font-medium text-2xl text-indigo-500 mb-1 sm:mb-0" href="https://kubernetes.io/" target="_blank">Kubernetes</a>
                              <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                              <div
                                   class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                   <div
                                        class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 ">
                                       <a href="https://kubernetes.io/" target="_blank"> <img src="../../public/images/icon-kube.svg" alt=""></a>
                                   </div>
                              </div>
                            </div>
                              <!-- <div class="text-xl font-normal"
                                        :class="{ 'dark:text-[#e4e4e4]': isDark, ' text-black': !isDark }">Acme was founded
                                        in Milan, Italy</div> -->
                              <!-- Content -->
                              <div :class="{ 'dark:text-[#e4e4e4]': isDark, ' text-black': !isDark }" class=" font-light">
                                   Kubernetes is like a control system for applications. It helps organize and manage the deployment of software, ensuring it runs reliably, can scale easily, and recovers automatically if something goes wrong.</div>
                         </div>
                         <div class="relative pl-8 sm:pl-32 py-6 group">
                              <!-- Purple label -->
                            <div class="flex justify-between p-[12px]">
                              <a class="font-[caveat] font-medium text-2xl text-indigo-500 mb-1 sm:mb-0" href="https://www.terraform.io/">Terraform</a>
                              <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                              <div
                                   class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                   <div
                                        class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 ">
                                        <a href="https://www.terraform.io/" target="_blank"><img src="../../public/images/icon-terraform.svg" alt=""></a>
                                   </div>

                              </div>
                            </div>
                              <!-- <div class="text-xl font-normal"
                                        :class="{ 'dark:text-[#e4e4e4]': isDark, ' text-black': !isDark }">Acme was founded
                                        in Milan, Italy</div> -->
                              <!-- Content -->
                              <div :class="{ 'dark:text-[#e4e4e4]': isDark, ' text-black': !isDark }" class=" font-light">
                                   Terraform is an infrastructure automation tool (Infrastructure as Code) that uses code to define and manage the setup of your computing resources across different environments.</div>
                         </div>

                    </div>
                    <!-- End: Vertical Timeline #1 -->

               </div>
          </div>
          <div>
               <div class="mt-4">
                    <BlogCards />
               </div>
          </div>
     </div>
</template>
<script>
import BlogCards from '@/components/BlogCards/BlogCards.vue';
import { useDark } from "@vueuse/core";
export default {
     components: {
          BlogCards
     },
     data() {
          return {
               isDark: useDark(),

          }
     }
}
</script>

<style>
/* cyrillic-ext */
@font-face {
     font-family: 'Caveat';
     font-style: normal;
     font-weight: 500;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/caveat/v18/WnznHAc5bAfYB2QRah7pcpNvOx-pjcB9eIipYSxP.woff2) format('woff2');
     unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
     font-family: 'Caveat';
     font-style: normal;
     font-weight: 500;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/caveat/v18/WnznHAc5bAfYB2QRah7pcpNvOx-pjcB9eIGpYSxP.woff2) format('woff2');
     unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
     font-family: 'Caveat';
     font-style: normal;
     font-weight: 500;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/caveat/v18/WnznHAc5bAfYB2QRah7pcpNvOx-pjcB9eIupYSxP.woff2) format('woff2');
     unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
     font-family: 'Caveat';
     font-style: normal;
     font-weight: 500;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/caveat/v18/WnznHAc5bAfYB2QRah7pcpNvOx-pjcB9eIWpYQ.woff2) format('woff2');
     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 400;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');
     unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 400;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');
     unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* greek-ext */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 400;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');
     unicode-range: U+1F00-1FFF;
}

/* greek */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 400;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');
     unicode-range: U+0370-03FF;
}

/* vietnamese */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 400;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
     unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 400;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
     unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 400;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 600;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');
     unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 600;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');
     unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* greek-ext */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 600;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');
     unicode-range: U+1F00-1FFF;
}

/* greek */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 600;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');
     unicode-range: U+0370-03FF;
}

/* vietnamese */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 600;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
     unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 600;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
     unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 600;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 700;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');
     unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 700;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');
     unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* greek-ext */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 700;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');
     unicode-range: U+1F00-1FFF;
}

/* greek */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 700;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');
     unicode-range: U+0370-03FF;
}

/* vietnamese */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 700;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
     unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 700;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
     unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 700;
     font-display: swap;
     src: url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}</style>