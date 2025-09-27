function isExternal(path) {
  const isExternal2 = /^(https?:|http?:|mailto:|tel:)/.test(path);
  return isExternal2;
}
function formatGrowthRate(growthRate) {
  if (growthRate === 0) {
    return "-";
  }
  const formattedRate = Math.abs(growthRate * 100).toFixed(2).replace(/\.?0+$/, "");
  return formattedRate + "%";
}
export {
  formatGrowthRate as f,
  isExternal as i
};
