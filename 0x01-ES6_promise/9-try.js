/* eslint-disable linebreak-style */
export default function guardrail(mathFunction) {
  const queue = [];
  queue.push(mathFunction());
  queue.push('Guardrail was processed');
  return queue;
}
