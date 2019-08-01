workflow "CI" {
  resolves = [
    "Install",
    "Test",
  ]
  on = "pull_request"
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
  runs = "yarn"
}

action "Lint" {
  uses = "actions/npm@master"
  needs = ["Install"]
  runs = "yarn"
  args = "lint"
}

action "Build" {
  uses = "actions/npm@master"
  needs = ["Lint"]
  runs = "yarn "
  args = "build"
}

action "Test" {
  uses = "willsoto/node-lts-browsers@master"
  needs = ["Build"]
  runs = "yarn"
  args = "test"
}
