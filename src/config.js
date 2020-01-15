/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const defaultConfig = {
    enableWorker: false,
    enableStashBuffer: true,
    stashInitialSize: undefined,

    isLive: false,

    lazyLoad: true,
    lazyLoadMaxDuration: 3 * 60,
    lazyLoadRecoverDuration: 30,
    deferLoadAfterSourceOpen: true,

    // autoCleanupSourceBuffer: default as false, leave unspecified
    autoCleanupMaxBackwardDuration: 3 * 60,
    autoCleanupMinBackwardDuration: 2 * 60,

    statisticsInfoReportInterval: 600,

    fixAudioTimestampGap: true,

    accurateSeek: false,
    seekType: 'range',  // [range, param, custom]
    seekParamStart: 'bstart',
    seekParamEnd: 'bend',
    rangeLoadZeroStart: false,
    customSeekHandler: undefined,
    reuseRedirectedURL: false,
    // referrerPolicy: leave as unspecified

    headers: undefined,
    customLoader: undefined,

    videoStateMonitorInterval: 1000,
    enableDurationMonitor: false,
    maxDurationGap: 1.5,        // second
    decreaseDurationStep: 0.4,  // second
    enableVideoFrozenMonitor: false,
    frozenTimesThreshold: 5,

    enableConstVideoViewSize: false,
    constVideoViewWidth: 1920,
    constVideoViewHeight: 1080,

    latencyDetectInterval: 15000,   // 毫秒，多长时间统计一次延迟追赶次数
    latencyDetectThreshold: 3,      // 次数，每次统计时，超过这个次数认为延迟追赶太频繁了
    latencyDetectIncreaseStep: 1,   // 当发生延迟追赶频繁，主动上调的数值（秒）
    latencyDetectAdjustStep: 0.1,   // 每次发生追赶，都上调此数值（秒）。当达到不发生追赶的条件时，下调此数值。
    latencyDetectAdjustFactor: 4,   // 下调延迟追赶阈值的时间统计因子。即 latencyDetectInterval x latencyDetectAdjustFactor
                                    // 后，如果一直没有发生延迟追赶，才进行下调。目的是通过这个因子来控制下调速度。
    // 实际应用中，发生追赶应该立刻上调latencyDetectAdjustStep，短时间多次追赶应该立刻补充一个较大的数值latencyDetectIncreaseStep
    // 上调以后，下调步子要小一点，逐步接近适合用户当前网络情况、以及源flv流情况的数值。
};

export function createDefaultConfig() {
    return Object.assign({}, defaultConfig);
}