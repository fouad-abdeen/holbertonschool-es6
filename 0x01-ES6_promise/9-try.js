/* eslint-disable linebreak-style */
export default function guardrail(mathFunction) {
  let queue = [];
  queue.push(mathFunction());
  queue.push('Guardrail was processed');
  return queue;
}
