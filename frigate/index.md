

## Proxmox settings

For Intel-based hardware acceleration, to allow access to the /dev/dri/renderD128 device with major number 226 and minor number 128, add the following lines to the /etc/pve/lxc/<id>.conf LXC configuration:
```
features: fuse=1,nesting=1
lxc.cgroup2.devices.allow: c 226:128 rwm
lxc.mount.entry: /dev/dri/renderD128 dev/dri/renderD128 none bind,optional,create=file
```
The LXC configuration will likely also need `features: fuse=1,nesting=1`. 
This allows running a Docker container in an LXC container (nesting) and prevents duplicated files and wasted storage (fuse).

https://deploy-preview-16390--frigate-docs.netlify.app/frigate/installation#proxmox
