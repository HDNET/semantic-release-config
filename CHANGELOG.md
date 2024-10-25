# Changelog


## [3.2.0](https://bitbucket.org/hdnet/semantic-release-config/compare/3.2.0%0D3.1.1) (2024-10-25)


### Features

* Change order of changelog items and remove chores and dx from changelog ([2bee9fb](https://bitbucket.org/hdnet/semantic-release-config/commits/2bee9fba6bc8b3d8107e0101988aea7418408d52))

## [3.1.1](https://bitbucket.org/hdnet/semantic-release-config/compare/3.1.1%0D3.1.0) (2024-10-25)


### Continuous Integration

* Set correct registry ([54cb767](https://bitbucket.org/hdnet/semantic-release-config/commits/54cb767cbcf4c93506b375193ef00ba949deca9a))


### Chore

* **release:** 1.0.0 [skip ci] ([e973a26](https://bitbucket.org/hdnet/semantic-release-config/commits/e973a269b9b0deda0d0f9dfdcc5c0e3c86656c1f))

## 1.0.0 (2024-10-25)


### ⚠ BREAKING CHANGES

* **release-notes:** order of commit types in release notes changed
* **composer:** the version in `composer.json` ist not maintained anymore
* **composer-plugin:** composer files are handled

### Features

* Allow publishing packages ([3bcc724](https://bitbucket.org/hdnet/semantic-release-config/commits/3bcc724eab725ac3fbfc42f33a680ef532327c63))
* **changelog:** Add all commit types to changelog ([74c8b1e](https://bitbucket.org/hdnet/semantic-release-config/commits/74c8b1ecc7710d516d82ad75ee95afb38e5e76ca))
* **composer-plugin:** Add plugin ([8de643a](https://bitbucket.org/hdnet/semantic-release-config/commits/8de643ab34efb29f068c83120393a21e48542024))
* **composer:** Remove composer plugin ([8a7c86e](https://bitbucket.org/hdnet/semantic-release-config/commits/8a7c86e125d68b77dbf7615e2a876eee34a3524e))
* **conventional-commits:** Allow setting issueUrlFormat and issuePrefixes through env ([a758a8b](https://bitbucket.org/hdnet/semantic-release-config/commits/a758a8b3b3cefcf79eff49e05a8fce4cfa990983))
* **npm-plugin:** Use npm plugin only when `package.json` exists to support php only releases ([614f201](https://bitbucket.org/hdnet/semantic-release-config/commits/614f201cf55f5ee8591d5184498556670f6191f8))
* **release-notes:** Change order of commit types ([6eea641](https://bitbucket.org/hdnet/semantic-release-config/commits/6eea6417489945c2130f46d40ae8c0a12bd203b1))
* **release-notes:** Setup default issuePrefix `#` ([5cdb338](https://bitbucket.org/hdnet/semantic-release-config/commits/5cdb3388e850c05b63d33534921e5ab4a7692e4f))
* **yarn-plugin:** Use yarn plugin when detecting `yarn.lock` file ([9b847a6](https://bitbucket.org/hdnet/semantic-release-config/commits/9b847a6017c0874284472269850cb66e0ee7f683))
* **yarn:** Use yarn plugin only for yarn 2+ ([8c9517d](https://bitbucket.org/hdnet/semantic-release-config/commits/8c9517d064bc28395e233248908afc30ea2d8bfd))


### Bug Fixes

* **breaking:** Add breaking config for major releases ([a956eae](https://bitbucket.org/hdnet/semantic-release-config/commits/a956eaef4cf8b9c65cb3585b682638b994f8bdea))
* **git:** Do not consider `yarn.lock` and `composer.lock` when committing as they do not hold any version info ([6c33b75](https://bitbucket.org/hdnet/semantic-release-config/commits/6c33b75a9c6501414339c785dcbdae5dccccb966))
* Remove repository link from package json ([5d6eb45](https://bitbucket.org/hdnet/semantic-release-config/commits/5d6eb4565b0ef876d90ff67cf41f8aff684a3df7))
* Set correct repository url in package json ([b938155](https://bitbucket.org/hdnet/semantic-release-config/commits/b938155d36dc80c9eb9792788f990d3eaeb7b63b))


### Documentation

* **readme:** Document publishing workflow ([70dbcd5](https://bitbucket.org/hdnet/semantic-release-config/commits/70dbcd521217aa1a04851e0213b16e22c5c24a5f))


### Continuous Integration

* Add bitbucket pipeline ([91bd2cf](https://bitbucket.org/hdnet/semantic-release-config/commits/91bd2cf799cbb472c2ed3c84d58044bbc41820d1))
* Configure publishing ([cb2dcd1](https://bitbucket.org/hdnet/semantic-release-config/commits/cb2dcd165ceae3a3fe291ca3f1e509f5bffedd73))


### Style

* Remove logging ([bd24398](https://bitbucket.org/hdnet/semantic-release-config/commits/bd24398c0f7e4934803326063e72f452e4350375))


### Chore

* **git-plugin:** Add composer and yarn files; restructure plugin adds ([ba92f9c](https://bitbucket.org/hdnet/semantic-release-config/commits/ba92f9c7093fd41c043ca1afc15e451c92d9f591))
* **release:** Bump version ([f17ff0b](https://bitbucket.org/hdnet/semantic-release-config/commits/f17ff0b433c4f7746cffd1d7e58a65d8cee649f9))
* **release:** Release 0.0.1 ([e0b540c](https://bitbucket.org/hdnet/semantic-release-config/commits/e0b540c51164e9ed15c70d76706f01e11595ac5e))
* **release:** Release 0.0.2 ([7e73488](https://bitbucket.org/hdnet/semantic-release-config/commits/7e73488462d7bbf8b8b5b17535c883c92213f5fb))
* **release:** Release 0.0.2 ([01e7670](https://bitbucket.org/hdnet/semantic-release-config/commits/01e76704bbce9ab64a06ad7f1c431ccf774218a4))
* **release:** Release 1.0.0 ([1504cbe](https://bitbucket.org/hdnet/semantic-release-config/commits/1504cbe6dff187b870dcce46513fb3a48cd12551))
* **release:** Release 1.0.1 ([666d806](https://bitbucket.org/hdnet/semantic-release-config/commits/666d806342ac802f08d5cc154c3a9fe910c22dad))
* **release:** Release 1.1.0 ([7c34b58](https://bitbucket.org/hdnet/semantic-release-config/commits/7c34b584d5d63f5e152fc7ba0706dfddd663cb43))
* **release:** Release 1.2.0 ([71743ca](https://bitbucket.org/hdnet/semantic-release-config/commits/71743ca5f836cec8b34ada21c570b6c69e7b079a))
* **release:** Release 2.0.0 ([3c22b60](https://bitbucket.org/hdnet/semantic-release-config/commits/3c22b6069bb04277adb40ca0c1747a63b8f93af3))
* **release:** Release 3.0.0 ([aeae5c1](https://bitbucket.org/hdnet/semantic-release-config/commits/aeae5c1f012f2cf1ab5aec1bfae21d96072dec58))
* **release:** Release 3.0.1 ([72c4981](https://bitbucket.org/hdnet/semantic-release-config/commits/72c49815233ee378b56a6943e0d0ad34a9a1c414))
* **security:** Update micromatch and braces to fix security issues ([5eb868b](https://bitbucket.org/hdnet/semantic-release-config/commits/5eb868b8b35ddf7ade78de71c0300b431b1ff87c))
* Update lock file ([b02f4fa](https://bitbucket.org/hdnet/semantic-release-config/commits/b02f4fae9729c960882d55eeeb3cc6a3141909f4))
* Use yarn ([0760f5c](https://bitbucket.org/hdnet/semantic-release-config/commits/0760f5c33c944d43fa9f9ae6c1584634fc4b7e69))
