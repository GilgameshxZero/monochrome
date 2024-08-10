# emilia

emilia is the web and mailserver to be run on servers.

## Setup

The following clears any system iptables rules, which may prevent mail from leaving or hitting the server.

```bash
iptables -P INPUT ACCEPT
iptables -P FORWARD ACCEPT
iptables -P OUTPUT ACCEPT
iptables -t nat -F
iptables -t mangle -F
iptables -F
iptables -X

ip6tables -P INPUT ACCEPT
ip6tables -P FORWARD ACCEPT
ip6tables -P OUTPUT ACCEPT
ip6tables -t nat -F
ip6tables -t mangle -F
ip6tables -F
ip6tables -X

iptables -nvL
```

## tmux

The following is used to build and run emilia in the background. Currently, emilia forwards all mail to a gmail account. The password is used by SMTP and HTTP clients alike to authenticate sending email or accessing sensitive webpages. The password is currently unsecured by HTTPS.

```bash
cd emilia/build;
make -j8 run BUILD=1 ARGUMENTS="--http-port=80 --smtp-port=25 --http-password=<SEE_PASSWORD_MD> --smtp-forward=yangawesome@gmail.com --smtp-password=<SEE_PASSWORD_MD>";
```
