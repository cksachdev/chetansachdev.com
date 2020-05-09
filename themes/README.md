ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

ssh-keygen -t rsa -b 4096 -C "cksachdev@gmail.com"
git remote set-url origin git@github.com:cksachdev/chetansachdev.com

