function camelToSpace(str) {
  return str.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? ' ' : '') + match)
}

function camelToDash(str) {
  return str.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase())
}

class Cargo extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    const root = this.attachShadow({mode: 'open'})
    const span = document.createElement('span')
    const img = document.createElement('img')
    const className = this.constructor.name
    span.dataset.name = camelToSpace(className)
    img.alt = camelToSpace(className)
    img.src = `img-black/${camelToDash(className)}.png`
    const style = document.createElement('style')
    style.textContent = `
    img { width: 36px; }
    .show-name { display: inline-block; }
    .show-name::after { content: attr(data-name); }
    `
    span.appendChild(img)
    this.shadowRoot.append(style, span)
    root.appendChild(span)
  }
  attributeChangedCallback(attr, prev, cur) {
    this.shadowRoot.querySelector('span').classList = cur
  }
  static get observedAttributes() {
    return ['class']
  }
}

// 1
customElements.define('c-bricks', class Bricks extends Cargo {})
customElements.define('c-cellulose', class Cellulose extends Cargo {})
customElements.define('c-cement', class Cement extends Cargo {})
customElements.define('c-concrete-blocks', class ConcreteBlocks extends Cargo {})
customElements.define('c-consumables', class Consumables extends Cargo {})
customElements.define('c-drilling-spare-parts', class DrillingSpareParts extends Cargo {})
customElements.define('c-fuel', class Fuel extends Cargo {})
customElements.define('c-gold', class Gold extends Cargo {})
customElements.define('c-metal-rolls', class MetalRolls extends Cargo {})
customElements.define('c-oil-barrels', class OilBarrels extends Cargo {})
customElements.define('c-packaged-sand', class PackagedSand extends Cargo {})
customElements.define('c-secure-container', class SecureContainer extends Cargo {})
customElements.define('c-service-spare-parts', class ServiceSpareParts extends Cargo {})
customElements.define('c-vehicle-spare-parts', class VehicleSpareParts extends Cargo {})
customElements.define('c-wooden-planks', class WoodenPlanks extends Cargo {})

// 2
customElements.define('c-cabin', class Cabin extends Cargo {})
customElements.define('c-cargo-container', class CargoContainer extends Cargo {})
customElements.define('c-concrete-slab', class ConcreteSlab extends Cargo {})
customElements.define('c-medium-pipes', class MediumPipes extends Cargo {})
customElements.define('c-metal-beams', class MetalBeams extends Cargo {})
customElements.define('c-small-pipes', class SmallPipes extends Cargo {})

// 4
customElements.define('c-drilling-equipment', class DrillingEquipment extends Cargo {})
customElements.define('c-large-pipe', class LargePipe extends Cargo {})
customElements.define('c-oversized-cargo', class OversizedCargo extends Cargo {})
// NB: rails is flatbed only! no sideboard!
customElements.define('c-rails', class Rails extends Cargo {})

// 5
customElements.define('c-cistern', class Cistern extends Cargo {})
customElements.define('c-industrial-boiler', class IndustrialBoiler extends Cargo {})
customElements.define('c-oil-rig-drill', class OilRigDrill extends Cargo {})
customElements.define('c-rail-section', class RailSection extends Cargo {})
customElements.define('c-sequoia', class Sequoia extends Cargo {})

// other
customElements.define('c-short-logs', class ShortLogs extends Cargo {})
