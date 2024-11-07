interface ArrowUpProps {
  root?: HTMLElement | null;
  amount: number;
  height?: number;
}

function UpHead() {
  return (
    <polygon points="40 0, 70 15, 40 30" className="svg-arrow-head"/>
  );
}

function DownHead({dah}) {
  return (
    <polygon
      points={`${40} ${0 + dah + 10}, 70 ${15 + dah + 10}, 40 ${30 + dah + 10}`}
      className="svg-arrow-head"
    />
  );
}

export function ArrowUp({amount, height}: ArrowUpProps) {
  const currentJet = {
    amount: 0,
  };

  currentJet.amount = amount;


  /*
  const height = (root)
    ? root.offsetHeight
    : 36
   */

  // console.log('arrow h', height)

  const klass = (currentJet.amount > 0)
    ? 'bsi--arrow--content-svg--up'
    : 'bsi--arrow--content-svg--down';
  const ztyle = {
    height: `${(height * (Math.abs(currentJet.amount))) + 20}px`
  };
  const vb = `0 0 70 ${height * (Math.abs(currentJet.amount)) + 20}`;
  const h2 = height * (Math.abs(currentJet.amount)) - 25 + 1; // + 20 // - 20;
  const y3 = height * (Math.abs(currentJet.amount)); // + 5;

  const dah = height * Math.abs(amount) - 10;

  return (
    <div className="bsi--arrow">
      <div
        className={`bsi--arrow--content-svg ${klass}`}
        style={ztyle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={vb}
        >
          <title>jet arrow</title>
          {
            (amount > 0) && <UpHead />
          }
          <rect x="0" y="5" width="40" height="20"/>
          <rect x="0" y="25" width="20" height={h2}/>
          <rect x="0" y={y3} width="40" height="20"/>
          {
            (amount < 0) && <DownHead dah={dah} />
          }

        </svg>
      </div>
    </div>
  );
}