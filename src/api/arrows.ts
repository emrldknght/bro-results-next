const createArrowDown = (root, amount) => {
  const currentJet = {
    amount: 0,
  }

  currentJet.amount = amount

  const height = root.outerHeight()
  // console.log(height, typeof height)

  const klass = (currentJet.amount > 0) ? 'bsi--arrow--content-svg--up': 'bsi--arrow--content-svg--down';
  const ztyle = `height: ${(height * (Math.abs(currentJet.amount))) + 25}px`;
  const vb = `0 0 70 ${height * (Math.abs(currentJet.amount)) + 25}`;
  const h2 = height * (Math.abs(currentJet.amount)) - 25 + 1 // + 20 // - 20;
  const y3 = height * (Math.abs(currentJet.amount)); // + 5;

  const upHead = (amount > 0)
    ? `<polygon points="40 0, 70 15, 40 30" class="svg-arrow-head"/>`
    : ''

  const dah = height * Math.abs(amount) - 10

  const downHead = (amount < 0)
    ? `<polygon 
        points="${40} ${0 + dah + 10}, 70 ${15 + dah + 10}, 40 ${30 + dah + 10}"
        class="svg-arrow-head"
        />`
    : ''


  // console.log('y3', y3)

  const el = `
    <div class="bsi--arrow bsi--arrow-down">
      <div
          class="bsi--arrow--content-svg ${klass}"
          style="${ztyle}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}">
          ${upHead}
          <rect x="0" y="5" width="40" height="20" />
          <rect x="0" y="25" width="20" height="${h2}" />
          <rect x="0" y="${y3}" width="40" height="20" />
          ${downHead}
        </svg>
      </div>
    </div>
`



  root.prepend(el);
}

const createArrowUp = (root, amount) => {
  const currentJet = {
    amount: 0,
  }

  currentJet.amount = amount

  const height = (root).outerHeight
  // console.log('height', height)
  // console.log(height, typeof height)

  const klass = (currentJet.amount > 0) ? 'bsi--arrow--content-svg--up': 'bsi--arrow--content-svg--down';
  const ztyle = `height: ${(height * (Math.abs(currentJet.amount))) + 20}px`;
  const vb = `0 0 70 ${height * (Math.abs(currentJet.amount)) + 20}`;
  const h2 = height * (Math.abs(currentJet.amount)) - 25 + 1 // + 20 // - 20;
  const y3 = height * (Math.abs(currentJet.amount)); // + 5;

  const upHead = (amount > 0)
    ? `<polygon points="40 0, 70 15, 40 30" class="svg-arrow-head"/>`
    : ''

  const dah = height * Math.abs(amount) - 10

  const downHead = (amount < 0)
    ? `<polygon 
        points="${40} ${0 + dah + 10}, 70 ${15 + dah + 10}, 40 ${30 + dah + 10}"
        class="svg-arrow-head"
        />`
    : ''


  // console.log('y3', y3)

  const el = `
    <div class="bsi--arrow">
      <div
          class="bsi--arrow--content-svg ${klass}"
          style="${ztyle}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}">
          ${upHead}
          <rect x="0" y="5" width="40" height="20" />
          <rect x="0" y="25" width="20" height="${h2}" />
          <rect x="0" y="${y3}" width="40" height="20" />
          ${downHead}
        </svg>
      </div>
    </div>
`



  root.prepend(el);
}

export const createArrow = (root, amount) => {
  if (amount > 0) {
    createArrowUp(root, amount)
  } else {
    createArrowDown(root, amount)
  }
}