import { Fragment } from 'react'
import { useAppContext } from '../appContext'
import './CardsTable.css'

const CardsTable = () => {
  const { usedCards, toggleCard, axiesAlive, toggleAxieAlive } = useAppContext()

  const iconsMap = {
    0: { src: '/img/teeth.png', alt: 'mouth' },
    1: { src: '/img/horns.png', alt: 'horns' },
    2: { src: '/img/back.png', alt: 'back' },
    3: { src: '/img/tail.png', alt: 'tail' },
  }

  return (
    <table className="cards-table">
      <thead>
        <tr>
          <th></th>
          <th>#1</th>
          <th>#2</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {usedCards.map((row, rowIdx) => (
          <Fragment key={`row-${rowIdx}`}>
            <tr>
              <td className="icon">
                <img
                  src={iconsMap[rowIdx % 4].src}
                  alt={iconsMap[rowIdx % 4].alt}
                />
              </td>
              {row.map((card, cellIdx) => (
                <td
                  key={`cell-${rowIdx}-${cellIdx}`}
                  className={
                    axiesAlive[Math.floor(rowIdx / 4)]
                      ? card
                        ? 'used'
                        : 'potential-draw'
                      : 'disabled'
                  }
                  onClick={() =>
                    axiesAlive[Math.floor(rowIdx / 4)] &&
                    toggleCard(rowIdx, cellIdx)
                  }
                >
                  {card ? 'X' : ''}
                </td>
              ))}
              {rowIdx % 4 === 0 ? (
                <td
                  className="kill-btn"
                  rowSpan={4}
                  onClick={() => toggleAxieAlive(rowIdx / 4)}
                >
                  {axiesAlive[Math.floor(rowIdx / 4)] ? (
                    <img
                      height={40}
                      width={50}
                      src="img/alive.png"
                      alt="dead"
                    />
                  ) : (
                    <img height={40} src="img/dead.png" alt="dead" />
                  )}
                </td>
              ) : null}
            </tr>
            {rowIdx % 4 === 3 && rowIdx < 11 && (
              <tr key={`divider-${Math.floor(rowIdx / 4)}`}>
                <td className="divider" colSpan={4}>
                  <hr />
                </td>
              </tr>
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  )
}

export default CardsTable
