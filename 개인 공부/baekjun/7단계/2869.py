# 달팽이는 길이가 V인 나무에 올라간다.
# 낮에 A정도 올라갈 수 있다.
# 밤에 B정도 미끄러진다.
# 모두 올라갈려면 며칠이 걸리나
# 첫 줄에 세 정수가 공백으로 주어진다.
A, B, V = map(int, input().split())
if (V-B)%(A-B) == 0:
    print ((V-B)//(A-B))
else:
    print ((V-B)//(A-B)+1)