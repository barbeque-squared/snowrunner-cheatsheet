const regions = {
  yukon: Yukon,
}

function pageload() {
  // TODO: get currently selected region from location.hash and resubmit form
  loadRegion()
}

function loadRegion() {
  const region = document.getElementById('region').value
  document.getElementById('region-content').innerHTML = regions[region]
  return false
}

function toggleCargoSizes() {
  document.querySelectorAll('.cargo-sizes .cargo-icons > *').forEach(
    el => el.classList.toggle('show-name')
  );
}
