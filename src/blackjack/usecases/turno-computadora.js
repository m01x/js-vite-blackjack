import { pedirCarta, valorCarta, crearCartaHTML } from './'
import Swal from 'sweetalert2'

/**
 * turno de la computadora
 * @param {Number} puntosMinimos que la computadora necesita para ganar.
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar puntos.
 * @param {divCartasComputadora} puntosHTML elemento HTML para mostrar cartas
 *  * @param {Array<String>} deck
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error('Puntos minimos son necesarios')
  if (!puntosHTML) throw new Error('PuntosHTML son argumentos necesarios')

  let puntosComputadora = 0

  do {
    const carta = pedirCarta(deck)

    puntosComputadora = puntosComputadora + valorCarta(carta)
    puntosHTML.innerText = puntosComputadora

    const imgCarta = crearCartaHTML(carta)
    divCartasComputadora.append(imgCarta)

    if (puntosMinimos > 21) {
      break
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21)

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      Swal.fire({
        title: 'Nadie gana',
        text: 'Inventa volver a jugar',
        icon: 'warning',
        confirmButtonText: 'Cool'
      })
    } else if (puntosMinimos > 21) {
      Swal.fire({
        title: 'Peprdiste',
        text: 'Computadora gana',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    } else if (puntosComputadora > 21) {
      Swal.fire({
        title: 'Ganaste',
        text: 'Computadora gana',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    } else {
      Swal.fire({
        title: 'Peprdiste',
        text: 'Computadora gana',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  }, 100)
}
