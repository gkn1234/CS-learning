/*
 * @Autor: Guo Kainan
 * @Date: 2021-08-27 15:13:49
 * @LastEditors: Guo Kainan
 * @LastEditTime: 2021-08-27 15:15:30
 * @Description: 
 */
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let recordHead = 0, recordTail = 0
  // 因为前面排除了边界情况，因此遍历从第2为至倒数第2位
  for (let i = 0; i < s.length - 1; i++) {
      // 以字符位中心扩散，检查奇数长度回文串
      const [oddHead, oddTail, oddLen] = checkPalindrome(s, i, false)
      // 以字符之后的空隙为中心扩散，检查偶数长度回文串
      const [evenHead, evenTail, evenLen] = checkPalindrome(s, i, true)
      // 比较更新
      const biggerHead = oddLen > evenLen ? oddHead : evenHead
      const biggerTail = oddLen > evenLen ? oddTail : evenTail
      const biggerLen = biggerTail + 1 - biggerHead
      const recordLen = recordTail + 1 - recordHead
      if (biggerLen > recordLen) {
          recordHead = biggerHead
          recordTail = biggerTail
      }
  }
  return s.slice(recordHead, recordTail + 1)
};

/**
* 单次中心扩散操作
* @param {string} s 字符串
* @param {number} pos 扩散中心位置
* @param {boolean} isGap 扩散中心是字符(false)还是字符后的空隙(true)
* @return {[number, number, number]} 本次查找中，最长回文子串的起止位置，以及长度
*/
function checkPalindrome (s, pos, isGap = false) {
  let head = isGap ? pos : pos - 1
  let tail = pos + 1
  while (head >= 0 && tail < s.length) {
      if (s[head] !== s[tail]) {
          // 发现回文串的破坏要素
          return [head + 1, tail - 1, tail - head - 1]
      }
      head--
      tail++
  }
  return [head + 1, tail - 1, tail - head - 1]
}