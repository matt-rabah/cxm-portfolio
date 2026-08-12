#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

command -v timeout || {
  echo "build-verified.sh requires GNU timeout." >&2
  exit 69
}

astro="${SITES_PROJECT_ROOT}/node_modules/.bin/astro"
if [[ ! -x "${astro}" ]]; then
  echo "Astro is unavailable. Run npm install before building." >&2
  exit 69
fi

echo "Running bounded Astro build..."
timeout \
  --signal=TERM \
  --kill-after="${SITES_BUILD_KILL_AFTER:-10s}" \
  "${SITES_BUILD_TIMEOUT:-3m}" \
  "${astro}" build

node "${script_dir}/package-sites.mjs"

"${script_dir}/validate-artifact.sh"
